import { IProduct } from './product';


export interface IPhon extends IProduct {
    brand : string;
    RAM : string;
    SSD : string;
    Proccessor : string;
    CameraFront : string;
    CameraBack : string;
}