import {IPrice} from "./IPrice";

export interface IProduct {
  id  : number ;
  name  : string ;
  rating : number ;
  available : boolean ;
  description : string ;
  priceDTO : IPrice
  imageUrl : string ;
}
