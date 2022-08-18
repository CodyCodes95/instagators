import connectMongo from "../../../utils/connectMongo";
import ProductModel from "../../../models/productModel"

const add = async (req, res) => {
    const { name, available } = req.body
    console.log("Connecting to Mongo...")
    await connectMongo();
    console.log("Connected to Mongo")
    console.log("Creating document")

    const product = await ProductModel.create(req.body)

    res.json({product})
}

export default add