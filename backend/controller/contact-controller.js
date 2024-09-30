const Contact = require('../models/schema-contact');

const contactController = async (req, res) => {
  try {
    const { email, phoneno, message } = req.body;

    // Create a new instance of Contact model
    const newContact = new Contact({
      email,
      phoneno,
      message,
    });

    // Save the new contact message to the database
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact, // Optionally, you can send back the saved contact data
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
};

module.exports = contactController;
