export interface IProduct extends Document {
  count: number;
  cost: number;
  likeCount: number;
  dislikeCount: number;
  productionDate: Date;
  model : string,
  img :  string,
}

