const User = require('../models/schema-service'); 

const getService = async (req, res) => {
  try {
    // Fetching all services
    const services = await User.find();
   
    if (!services || services.length === 0) {
      return res.status(404).json({ msg: "No Service found" });
    }

    res.status(200).json(services);
  } catch (error) {
    console.log(`Services: ${error}`);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { getService };
