import mongoose from "mongoose"

export const connectDB=() =>mongoose
.connect(process.env.MONGO_URI,{
    dbName:"NodeApi",
})

.then(()=>(console.log("Database connected")))
.catch(()=>(console.log(e)))