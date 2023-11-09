import {Component, OnInit} from '@angular/core';
import {NavBarService} from "../../services/navBarService/nav-bar.service";
import {ICategory} from "../../models/icategory";
import {IUnivers} from "../../models/iunivers";
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  univers !: IUnivers [];
  categories !: ICategory [];

  constructor(private navBarService: NavBarService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.navBarService.getAllUnivers()
      .subscribe(res => {
        this.univers = res
      });
    this.navBarService.getAllCategoriesByUniversId()
      .subscribe(res => {
        this.categories = res;
        // // @ts-ignore
        // this.categories = (this.univers || []).filter(u => u.id == 2).at(0).categoryDTOS;
      })
  }

  login() {
    this.route.navigate(['/login']);
  }
}
