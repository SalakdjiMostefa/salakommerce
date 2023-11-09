import { Injectable } from '@angular/core';
import {ICategory} from "../../models/icategory";
import {HttpClient} from "@angular/common/http";
import {IUnivers} from "../../models/iunivers";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  categories: ICategory[] = [];
  url: string = "http://localhost:8080/catalog/getAllUnivers"


  constructor(private httpClient : HttpClient) { }

  getCategories() {
    return this.httpClient.get<IUnivers[]>(this.url + "/1");
  }
}
