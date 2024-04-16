const User = require('../models/User');

const UserController = {


    async get_users(req, res) {
        try {
            const users = await User.find();
            res.status(200).json({
                type: "success",
                users
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
       
    },


    async get_user(req, res) {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...data } = user._doc;
            res.status(200).json({
                type: "success",
                data
            });

        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },



    async update_user(req, res) {
        if(req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10)
        }
        
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, 
            { new: true }
            );
            res.status(200).json({
                type: "success",
                message: "User updated successfully",
                updatedUser
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },


    async delete_user(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id)

            console.log("user==>", req.params.id)
            res.status(200).json({
                type: "success",
                message: "User has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }
};

module.exports = UserController;