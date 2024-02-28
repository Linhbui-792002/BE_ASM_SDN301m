const joi = require("joi");
const APIError = require("../../utils/errors");

class authValidation {
  constructor() {}
  static register = async (req, res, next) => {
    try {
      await joi
        .object({
          firstName: joi.string().trim().min(3).max(100).required().messages({
            "string.base": "First name field must be valid text !",
            "string.empty": "First name field cannot be empty !",
            "string.min": "First name field must be at least 3 characters !",
            "string.max":
              "First name field must be a maximum of 100 characters !",
            "string.required": "First name field is required !",
          }),
          lastName: joi.string().trim().min(3).max(100).required().messages({
            "string.base": "Last name field must be valid text !",
            "string.empty": "Last name field cannot be empty !",
            "string.min": "Last name field must be at least 3 characters !",
            "string.max":
              "Last name field must be a maximum of 100 characters !",
            "string.required": "Last name field is required !",
          }),
          email: joi
            .string()
            .email()
            .trim()
            .min(3)
            .max(100)
            .required()
            .messages({
              "string.base": "Email field must be valid text !",
              "string.empty": "Email field cannot be empty !",
              "string.min": "Email field must be at least 3 characters !",
              "string.max": "Email field must be a maximum of 100 characters !",
              "string.required": "Email field is required !",
              "string.email": "Must be a valid email!",
            }),
          password: joi.string().min(6).max(36).required().messages({
            "string.base": "Password field must be valid text !",
            "string.empty": "Password field cannot be empty !",
            "string.min": "Password field must be at least 6 characters !",
            "string.max": "Password field must be a maximum of 36 characters !",
            "string.required": "Password field is required !",
          }),
        })
        .validateAsync(req.body);
    } catch (error) {
      if (error.details && error?.details[0].message) {
        throw new APIError(error.details[0].message, 400);
      } else {
        throw new APIError("Please check validation !", 400);
      }
    }
    next();
  };

  static login = async (req, res, next) => {
    try {
      await joi
        .object({
          email: joi
            .string()
            .email()
            .trim()
            .min(3)
            .max(100)
            .required()
            .messages({
              "string.base": "Email field must be valid text !",
              "string.empty": "Email field cannot be empty !",
              "string.min": "Email field must be at least 3 characters !",
              "string.max": "Email field must be a maximum of 100 characters !",
              "string.required": "Email field is required !",
              "string.email": "Must be a valid email!",
            }),
          password: joi.string().min(6).max(36).required().messages({
            "string.base": "Password field must be valid text !",
            "string.empty": "Password field cannot be empty !",
            "string.min": "Password field must be at least 6 characters !",
            "string.max": "Password field must be a maximum of 36 characters !",
            "string.required": "Password field is required !",
          }),
        })
        .validateAsync(req.body);
    } catch (error) {
      if (error.details && error?.details[0].message) {
        throw new APIError(error.details[0].message, 400);
      } else {
        throw new APIError("Please check validation !", 400);
      }
    }
    next();
  };
}

module.exports = authValidation;
