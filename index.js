import express from "express";
import productRouter from "./src/product/productRouter.js";
import app_routes from "./src/routes/routes.js";
import baseRouter from "./src/base/baseRouter.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(app_routes.base, baseRouter);
app.use(app_routes.products, productRouter);

app.listen(PORT,()=>{
    console.log(`La aplicacion de Express esta corriendo en el Puerto http://localHost:${PORT}`);
});




