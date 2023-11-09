import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'c/:id', component: ProductListComponent },
  { path: 'sc/:id', component: ProductListComponent },
  { path: 'p/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
