const jwt = require("jsonwebtoken");
const User = require("../models/schema-reg");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  //console.log(jwtToken);

  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log('Token verification successful:');
    //console.log(isVerified.email);
    
    // getting the complete user details & also we don't want password to be sent
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log(userData);
   
    
    req.token = token;
    //console.log(req.token);
    req.user = userData;
   
    //console.log(req.user);
    
    
    next();
  } catch (error) {
   
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;