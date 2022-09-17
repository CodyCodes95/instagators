import { Schema, model, models } from "mongoose";

const carSchema = new Schema({
  make: { type: String },
  model: { type: String },
  owner: { type: String },
  description: { type: String, unique: true },
  registration: {type: String},
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const CarModel = models.Car || model("Car", carSchema);

export default carSchema;
