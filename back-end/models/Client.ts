import mongoose, { Schema, Document } from "mongoose";

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  basket: [{
    type: Schema.Types.ObjectId,

  }]
});

const Client  = mongoose.model("Client", ClientSchema); 

export default Client
