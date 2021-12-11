import accountDb from "../models/account.js";

export const index = async(req, res) => {
    res.render("home", { layout: false });
};