import Products from "../models/product";
import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required()
});


export const getAll = async (req, res) => {
    try {
        const products = await Products.find();
        return res.status(201).json(products)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
};

export const get = async (req, res) => {
    try {
        const products = await Products.findId(req.params.id);
        if (!products) {
            return res.json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.json(products)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
};


export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const products = await Products.create(req.body);
        return res.status(201).json({
            message: " tạo sản phẩm thành công",
            products,
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
};


export const update = async (req, res) => {
    try {
        const products = await Products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        return res.json({
            message: "Cập nhật thành công",
            products,
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}


export const remove = async (req, res) => {
    try {
        const products = await Products.findOneAndDelete({ _id: req.params.id })
        return res.json({
            message: "Xóa nhật thành công",
            products,
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

