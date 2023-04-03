import Joi from "joi";
import Author from "../models/author";
import { signupSchema, signinSchema } from "../schema/author"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { name, email, password, } = req.body;
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            })
        }


        const authorExists = await Author.findOne({ email })
        if (authorExists) {
            return res.status(400).json({
                messahe: "Người dùng tồn đã tại"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const author = await Author.create({
            name,
            email,
            password: hashedPassword,
        })

        // ko cần cũng đc
        const token = jwt.sign({ _id: Author._id }, "LeCuc", { expiresIn: "1d" });
        author.password = undefined;
        return res.status(201).json({
            messahe: "Thành công",
            accessToken: token,
            author,
        })
    } catch (error) {

    }
}



export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = signinSchema.validate({ email, password }, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const author = await Author.findOne({ email })
        if (!author) {
            return res.status(400).json({
                message: "Tài khoản không tồn tại !",
            });
        }



        // vô lý, tại sao await ở đây lại khồn được ????
        const isMatch = await bcrypt.compare(password, author.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Không đúng mật khẩu !",
            });
        }

        // đoạn này là gì ???
        const token = jwt.sign({ _id: author._id }, "LeCuc", { expiresIn: "1h" });

        author.password = undefined;

        return res.status(200).json({
            message: "Đăng nhập thành công !",
            accessToken: token,
            author,
        });
    } catch (error) {

    }
}