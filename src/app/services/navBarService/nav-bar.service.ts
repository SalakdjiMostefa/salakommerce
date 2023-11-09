import {Injectable} from '@angular/core';
import {ICategory} from "../../models/icategory";
import {HttpClient} from "@angular/common/http";
import {IUnivers} from "../../models/iunivers";

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  urlAllUnivers: string = "http://localhost:8080/catalog/getAllUnivers"
  urlAllCategories: string = "http://localhost:8080/catalog/getAllUnivers"

  constructor(private httpClient: HttpClient) {

  }

  getAllUnivers() {
    return this.httpClient.get<IUnivers[]>(this.urlAllUnivers + "/1")
  }

  getAllCategoriesByUniversId() {
    return this.httpClient.get<ICategory[]>(this.urlAllCategories + "/1")
  }
}
