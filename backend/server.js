const express = require('express')
const cors = require("cors")
const app = express();
const router = require('./routes/routes')
const mongoose = require('mongoose')
const cloudinary = require("cloudinary").v2;
const { config } = require('dotenv');
const cookieParser = require('cookie-parser');
const ErrorMiddleware = require("./middleware/Error")

config({
    path:'./config/config.env'
})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET    
})
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true,
}))



app.use('/api', router)

app.use(ErrorMiddleware)

mongoose.connect("mongodb://127.0.0.1:27017/Blogs_website_data")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("The server and database is successfully running")
    })
})
.catch((err)=>{
    console.log(err)
})

