const router = require('express').Router();
const UserModel = require('./../schema/UserSchema');
const CartModel = require('./../schema/CartSchema');


router.post("/create", (req,res)=>{

    // TODO:
    //      Create cart then assign cart id to new user
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const cartModel = new CartModel({
        items: [],
        fulfilledDate: null,
        scheduled: null,
        scheduled
    });

    const model = new UserModel({
        firstName,
        lastName,
        email,
        password,
        cart
    });

});



module.exports = router;