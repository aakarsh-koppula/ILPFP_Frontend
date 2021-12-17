import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { DiscountSmallerThanPriceDirective } from './directives/discount-smaller-than-price.directive';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPricePipe } from './pipes/search-price.pipe';
import { SearchCategoriesPipe } from './pipes/search-categories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    CartComponent,
    DiscountSmallerThanPriceDirective,
    AddProductComponent,
    ManageOrderComponent,
    ManageProductsComponent,
    HomeComponent,
    SearchPricePipe,
    SearchCategoriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
