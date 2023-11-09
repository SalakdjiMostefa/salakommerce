import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {FormsModule} from "@angular/forms";
import { CartNumberComponent } from './components/cart-number/cart-number.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ProductListComponent,
    SideBarComponent,
    ProductDetailsComponent,
    CartNumberComponent,
    LoginComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NavbarComponent,
    CartNumberComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
