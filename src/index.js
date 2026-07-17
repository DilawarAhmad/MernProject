import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("server is running on port 8000")
    })
})
.catch((error)=> {
    console.log("mongo db connection failed",error)
})