
import express from "express";
import authRoute from './router/authRoute.js';
import postRoute from './router/projectRoute.js';
import { authMiddleware } from "./middleware/isAuth.js";
import dotenv from 'dotenv';  // Import dotenv
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
dotenv.config();  

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST","PUT"],
    credentials: true
}));


app.use(cookieParser());
app.use(bodyParser.json()); 
app.get('/protected', authMiddleware, (req, res) => {
   if (req.user) {
       res.status(200).json({ message: 'Access granted', user: req.user });
   } else {
       res.status(401).json({ message: 'Unauthorized: No user found' });
   }
});
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/post",authMiddleware, postRoute);

app.listen(process.env.PORT, () => {
   console.log("Server connected...");
});
