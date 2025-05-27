import  {IProduct} from '../interfaces/product';


interface User {
    name : string;
    email ?: string;
    password : string;
    basket : IProduct[];
}


export default User;