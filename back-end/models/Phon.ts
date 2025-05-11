import mongoose, { Schema } from 'mongoose';
import { IPhon } from '../interfaces/phon';

const PhoneSchema: Schema<IPhon> = new Schema(
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
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    SSD : {
      type: String,
      required: true,
    },
    img : {
      type: String,
      default : null,
    }
  },
);

const Phone = mongoose.model<IPhon>('Phone', PhoneSchema);
export default Phone;
