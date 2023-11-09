import {IImage} from "./iimage";

export interface ICategory {
  id : number;
  name: string;
  universId: number;
  description: string;
  image:IImage;

}
