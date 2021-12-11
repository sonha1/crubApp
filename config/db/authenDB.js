import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/AuthenDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("nice");
    } catch (error) {
        console.log(error);
    }
};