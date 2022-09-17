import connectMongo from "../../../utils/connectMongo";
import ProductModel from "../../../models/productModel";

const update = async (req, res) => {
  await connectMongo();

    const product = await ProductModel.findByIdAndUpdate(req.body.id, {
      available: req.body.available
  });

  res.json({ product });
};

export default update;
