import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const dashboard = (req, res) => {
    return res.render('index.ejs');
}

export const loginPage = (req, res) => {
    return res.render('./pages/login.ejs');
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await UserModel.findOne({ email });

        if (user) {
            let isValid = await bcrypt.compare(password, user.password);

            if (isValid) {
                let payload = {
                    id: user.id,
                    role: user.role
                };

                const token = jwt.sign(payload, process.env.JWT_SECRET);

                console.log("Login Success.");
                return res.json({ message: "Login successful", token }); 
            } else {
                console.log("Password Not Match.");
                return res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            console.log("User Not Found.");
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const registerPage = (req, res) => {
    return res.render('./pages/register.ejs');
}

export const register = async (req, res) => {
    try {
        const { password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            console.log("Password and Confirm Password Not Match.");
            return res.status(400).json({ message: "Passwords do not match" });
        }

        let hashPassword = await bcrypt.hash(password, 10);
        req.body.password = hashPassword;

        await UserModel.create(req.body);
        console.log("User Created Successfully.");

        return res.redirect("/login");
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
