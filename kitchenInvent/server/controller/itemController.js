const Item = require("../models/Item");
const User = require('../models/User')
const passport = require('passport');




module.exports = {
	addItems: (req, res) => {
   const newItem = new Item({
   	...req.body,
   	isAvailable: true})
   newItem.save((err, item) => {
   	if(err) res.send(err)
   		res.json(item)
   })
	},

	getItems: (req, res) => {
		Item.find({}, (err, item) => {
			if(err) 
				{
					res.send(err)
				}else{
				res.json(item)
				}
		})
	},

	getSingleItems: (req, res) => {
		const id = req.params.item_id;
		console.log(id)
		Item.findById(id, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	},

	editItem: (req, res) => {
		const item_Id = req.params.item_id
		console.log(item_Id)
		Item.findByIdAndUpdate({_id:item_Id}, req.body, {new:true}, (err, data) => {
			if(err) res.send(err)
				res.json(data)
		})
	},

	createUser: (req, res) => {
		const newUser = new User({
			...req.body
		});

		User.find({username : newUser.username}, function (err, user) {
			if (user.length){
					return res.json({message:'Username exists already',success:false});
			}else{

				User.find({email : newUser.email}, function (err, user) {
					if (user.length){
							return res.json({message:'Email exists already',success:false});
					}else{

						newUser.save((err, user) => {
							if(err) return res.json({message:err,success:false});
								return res.status(201).json({
									user: user.username,
									success: true,
									message: "User Created Successfully"
								})
						})		
					}
			});		
			}
	});
	},

	loginUser: function(req, res, next) {
	  passport.authenticate('local', function(err, user, {message}) {
	    if (err) { return next(err); }
	    if (!user) { return res.json({
	    	success: false,
	    	message
	    }); }
	    req.logIn(user, function(err) {
	      if (err) { return next(err); }
	      return res.status(200).json({
	      	user: user.username,
					message: "Successfully login",
					success: true
	      });
	    });
	  })(req, res, next);
	},
 

	isLoggedIn: (req, res, next) => {
	if(req.session.passport){
		return next();
	}
	else {
	return res.status(404).json({
		success : false,
		message: "user Not login"
	})}
	},

	loggedOut: (req, res) => {
		req.session.destroy();	
		res.status(200).json({
			success: true,
			message: "Session is removed & User Is LoggedOut"
		})
	},

}

