import  {IProduct} from '../interfaces/product';


interface Client {
    name : string;
    email ?: string;
    password : string;
    basket : IProduct[];
}


export default Client;