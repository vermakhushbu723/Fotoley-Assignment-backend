const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const Wallet2 = require("../models/wallet");
const Transaction=require('../models/transaction');



//Register
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
		const { UserName, email, password, isPremium } = req.body;
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({ UserName, email, password: hashPassword, isPremium });
		// await new User({ ...req.body, password: hashPassword }).save();
		// user.balance = isPremium ? 2500 : 1000;
		if (isPremium === true) {
			newUser.balance = 2500;
		} else {
			newUser.balance = 1000;
		}

		await newUser.save();
		console.log(newUser);
		res.status(201).send({ message: "User created successfully" });
		// console.log("user"+user.balance);
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.get('/:id', async (req, res) => {
	try {
		const wallet = await Wallet2.findById({ _id: req.params.id });
		if (!wallet)
			res.status(402).send("user not found");
		res.status(200).json(wallet);
	}
	catch (err) {
		console.log(err);
	}
})

router.post('/send',async (req,res)=>{
	const {senderId,receiverId,amount}=req.body;
	try{
		const sender=await User.findById(senderId);
		const receiver=await User.findById(receiverId);
		if(!sender && !receiver)
		res.status(402).json("user not find");
		if (sender.balance < amount) {
			return res.status(400).json({ message: 'Insufficient funds' });
		  }
		
		  if (sender._id.equals(receiver._id)) {
			return res.status(400).json({ message: 'Super user cannot send or receive money' });
		  }
		
		  sender.balance -= amount;
		  receiver.balance += amount;
		
		  const transaction = new Transaction({
			sender: sender._id,
			receiver: receiver._id,
			amount,
			charges: amount*20,
		  });
		
		  await sender.save();
		  await receiver.save();
		  await transaction.save();
		
		  res.status(200).json({ message: 'Transaction successful' });
	
	}
	catch(err)
	{
		console.log(err);
	}
})

module.exports = router;
