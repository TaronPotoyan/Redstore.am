import mongoose, { Schema } from 'mongoose';
import { IPhon } from '../interfaces/phon';

const Productschema: Schema<IPhon> = new Schema(
  {
    count: {
      type: Number,
      required: true,
    }, 
    cost: {
      type: Number,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      default: 0,
    },
    productionDate: {
      type: Date,
      required: false,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    SSD: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      default: null,
    },
    RAM: {
      type: String,
      required: true,
    },
    CameraFront: {
      type: String,
      required: false,
    },
    CameraBack: {
      type: String,
      required: false,
    },
    Processor: {
      type: String,
      required: false,
    },
    type : {
      type : String,
      default : 'phon'
    }
  }
);

const Product = mongoose.model<IPhon>('products', Productschema);
export default Product;
