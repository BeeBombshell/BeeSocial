const User = require('../models/User')
const router = require('express').Router();
const bcrypt = require('bcrypt')

// update user
router.put("/:id", async(req, res)=> {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            catch(err) {
                return res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body,});
            res.status(200).json("Account has been updated!")
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can update only your account!")
    }
})

// delete user
router.delete("/:id", async(req, res)=> {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted successfully!")
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can delete only your account!")
    }
})

// get a user

// follow a user

// unfollow a user

module.exports = router;