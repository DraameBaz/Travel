const validate = (schema) => async (req, res, next) => {
  try {
    console.log("h1");
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    return next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.issues.map((curElem) => curElem.message);

    const error = {
      status,
      message,
      extraDetails,
    };

    // Pass the error object to the next middleware
    next(error);
  }
};

module.exports = validate;
