import express from "express";

const baseRouter = express.Router();

baseRouter.get("/", (req, res)=> {
    res.send("Bienvenido a la API de Full-Stack!");
});

export default baseRouter;