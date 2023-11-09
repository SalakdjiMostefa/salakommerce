import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/productsservice/products.service";
import {IProduct} from "../../models/iproduct";
import {ActivatedRoute, Router} from "@angular/router";
import {CommunService} from "../../services/communservice/commun.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product !: IProduct;

  constructor(private productsService : ProductsService,
              private route: ActivatedRoute,
              private service : CommunService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProductById(id).subscribe(
      res => this.product = res
    )
  }

  addToCart() {
    this.service.sendUpdate();
  }
}
