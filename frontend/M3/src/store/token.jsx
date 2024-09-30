import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);

  const userAuthentication = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:8080/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error(error);
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/Provider/Service", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        console.error("Error fetching services");
        setServices([]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices([]);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, storeTokenInLS, LogoutUser, user, getServices, services }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
