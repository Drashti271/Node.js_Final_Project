import express from "express";
import dotenv from "./configs/dotenv.js";
import db from "./configs/database.js";
import cookieParser from "cookie-parser";
import router from "./routers/index.js";

const app = express();
const port = dotenv.PORT || 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static('uploads'));

app.use('/',router);

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Started.");
        console.log("http://localhost:" + port); 
    } else {
        console.log(error.message);
    }
});
