export default interface IProduct extends Document {
    _id : any,
    count: number;
    cost: number;
    likeCount: number;
    dislikeCount: number;
    productionDate: Date;
    model : string;
    img : string;
    type ?: string;
}
  
