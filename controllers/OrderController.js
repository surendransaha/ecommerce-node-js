const Order = require('../models/Order');

const OrderController = {

    async get_orders(req, res) {
        try {
            const orders = await Order.find();
            res.status(200).json({
                type: "success",
                orders
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },



    async get_order(req, res) {
        try {
            const orders = await Order.findOne({ userId: req.params.userId });
            if (!orders) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    orders
                })
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },


    async create_order(req, res) {
        const newOrder = new Order(req.body);
        try {
            const savedOrder = await newOrder.save();
            res.status(201).json({
                type: "success",
                message: "Order created successfully",
                savedOrder
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },


    async update_order(req, res) {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true }
            );
            res.status(200).json({
                type: "success",
                message: "Order updated successfully",
                updatedOrder
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    async delete_order(req, res) {
        try {
            await Order.findOneAndDelete(req.params.id);
            res.status(200).json({
                type: "success",
                message: "Order has been deleted successfully"
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

module.exports = OrderController;