import mongoose from "mongoose";
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB")
}).catch(() => {
    console.log("Error connecting to MongoDB")
})