const mongoose = require('mongoose')

async function dbconnect(){
    DBURL = "mongodb+srv://demo:demo123@cluster0.0hrlyzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    DBNAME = "student"
    try{
        await mongoose.connect(DBURL+"/"+DBNAME)
        console.log("Database connected")
    }   
    catch(error){
        console.log(error);
    }
}

dbconnect()