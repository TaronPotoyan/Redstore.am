import { IProduct } from './product';


export interface IPhon extends IProduct {
    brand : string;
    RAM : string;
    SSD : string;
    Processor : string;
    CameraFront : string;
    CameraBack : string;
}