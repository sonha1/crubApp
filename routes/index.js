import homeRoute from "./home.js";

const route = (app) => {
    app.use("/", homeRoute);
};

export default route;