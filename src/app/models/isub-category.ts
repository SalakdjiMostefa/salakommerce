import {IImage} from "./iimage";

export interface ISubCategory {
  id : number;
  name: string;
  categoryId: number;
  description: string;
  image:IImage;

}
