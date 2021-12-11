import mongoose from "mongoose";

const Account = new mongoose.Schema({
    username: {
        type: String,
    },
    passwords: {
        type: String,
    },
    age: {
        type: Number,
    },
});

export default mongoose.model("Account", Account);