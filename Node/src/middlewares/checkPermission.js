import Jwt from "jsonwebtoken";
import Author from "../models/author";

export const checkPermission = async (req, res, next) => {
    try {
        // ktra xem user có đăng nhập không
        if (!req.headers.authorization) {
            throw new Error("Bạn phải đăng nhập để thực hiện")
        }

        // lấy jwt token từ header
        const token = req.headers.authorization.split(" ")[1];

        // xác thực jwt token
        const { _id } = Jwt.verify(token, "LeCuc");

        // lấy thông tin user từ database
        const author = await Author.findById(_id)

        // kiểm tra xem user có đủ quyền để thực hiện hành động đó không
        if (author.role != "admin") {
            throw new Error("Bạn không có quyền để thực hiện hành động này");
        }
        console.log("author", author);
        // lưu thông tin user vào request để sử dụng trong các middleware khác
        req.author = author;

        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
