require("dotenv").config();  //this is for the fetching mongodb  url from the .env file

const express=require('express');  //1st steps
const app =express();              //second steps

//for database
const mongoURL = process.env.MONGODB_URL;

//importing the mongodb from the db folder

const connectDB=require("./db/connect");

//this is for the port purpose 
const PORT=process.env.PORT || 5000;  //3rd step

//this is for the importing here
const products_routes=require("./routes/products");

// this is for by default 
app.get("/",(req,res)=>{        //4th step
    res.send("Hi I am live");
})

//this is used for routing purpose 
app.use('/api/products',products_routes);

const start= async()=>{              //5th step 
    try {
        await connectDB(mongoURL);
        app.listen(PORT,() =>{
            console.log(`${PORT} Yes I am connected`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();