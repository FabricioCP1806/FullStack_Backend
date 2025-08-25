import express from 'express';
import products from '../dataBase/products.json' with {type: "json"};

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
    res.send(products);
});

export default productRouter;