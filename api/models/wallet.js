const mongoose = require("mongoose");
// const { default: Wallet } = require("../../client/src/components/Wallet/Wallet");

const userSchema = new mongoose.Schema({
	Date: { type: Date, required: true },
	Amount: { type: Number, required: true },
	PaymentType: { type: String, required: true },
	
	Remark: {
		type: String,
		required: true,
	  },
});

const Wallet2 = mongoose.model("wallet", userSchema);
module.exports =Wallet2;
