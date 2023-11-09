import {Injectable} from '@angular/core';
import {IProduct} from "../../models/iproduct";
import {HttpClient} from "@angular/common/http";
import {ISubCategory} from "../../models/isub-category";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlSubCat: string = "http://localhost:8080/catalog/getAllSubCatByCatId/"
  urlProductSubCat: string = "http://localhost:8080/catalog/getAllProductsBySubCat/"
  urlProduct: string = "http://localhost:8080/catalog/getProductsById/"

  constructor( private httpClient : HttpClient) {
  }

  getAllProductsBySubCatId(id: string | null) {
    return this.httpClient.get<IProduct[]>(this.urlProductSubCat + id);
  }

  getProductById(id: string | null) {
    return this.httpClient.get<IProduct>(this.urlProduct + id);
  }

  getAllSubCategoriesByCatId(id: string | null) {
    return this.httpClient.get<ISubCategory[]>(this.urlSubCat + id);
  }
}
