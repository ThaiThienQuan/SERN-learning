import express from "express";
import getHomePage from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/fun', (req, res) => {
        return res.send("Hello cả nhà yêu của kem!!")
    });
    router.get('/', getHomePage.getHomePage);
    router.get('/about', getHomePage.getAboutPage);
    return app.use("/", router);
}
module.exports = initWebRoutes;