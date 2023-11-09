import {Component, OnInit} from '@angular/core';
import {HomePageService} from "../../services/homepageService/home-page.service";
import {ICategory} from "../../models/icategory";
import {IUnivers} from "../../models/iunivers";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  univers !: IUnivers [];
  categories !: ICategory [];


  constructor(private homePageService: HomePageService) {
  }

  ngOnInit(): void {
    this.homePageService.getCategories().subscribe(
      res => {
        this.univers = res;
        // @ts-ignore
        this.categories = (this.univers || []).filter(u => u.id == 2).at(0).categoryDTOS;
      }
    )
  }

  setClass(category: IUnivers, i: number) {

  }
}
