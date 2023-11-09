import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/productsservice/products.service";
import {IProduct} from "../../models/iproduct";
import {ActivatedRoute, Router} from "@angular/router";
import {CommunService} from "../../services/communservice/commun.service";
import {ISubCategory} from "../../models/isub-category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products !: IProduct[];
  subCategories !: ISubCategory[];
  id !: string | null;
  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private route: Router,

              private service: CommunService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsService.getAllProductsBySubCatId(this.id).subscribe(
      res =>
      {
        this.products = res;
      }
    )
    this.productsService.getAllSubCategoriesByCatId(this.id).subscribe(
      res => {
        this.subCategories = res;
      }
    )
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.service.sendUpdate();
  }

  addToCart(productId : number) {
    this.service.sendUpdate();
  }

  getAllProductBySubCategoryId(id: number) {
    this.productsService.getAllProductsBySubCatId(id.toString()).subscribe(
      res => this.products = res
    )
    this.route.navigate(['sc/', id]);
  }
}
