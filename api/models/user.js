const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	UserName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	// UserType: { type: String, required: true },
	isPremium: {
		type: Boolean,
		required: true,
		default:true,
	},
	balance: {
		type: Number,
		// required: true,
		default: 0,
	  },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		UserName: Joi.string().required().label("First Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		isPremium: Joi.boolean().required().label("User Type"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
