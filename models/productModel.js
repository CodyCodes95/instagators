import { Schema, model, models } from "mongoose";

const productsSchema = new Schema({
    name: { type:String, unique: true },
    available: { type: Boolean }
})

const ProductModel = models.Product || model("Product", productsSchema)

export default ProductModel