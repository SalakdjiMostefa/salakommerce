import {IImage} from "./iimage";
import {ICategory} from "./icategory";

export interface IUnivers {
  id : number;
  name: string;
  level: string;
  description: string;
  categoryDTOS : ICategory[];
  image:IImage;

}
