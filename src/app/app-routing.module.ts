import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"register", component:RegistrationComponent},
  {path:"login", component: LoginComponent},
  {path:"profile", component: ProfileComponent},
  {path:"home", component: HomeComponent},
  {path:"cart", component: CartComponent},
  {path:"addproduct", component: AddProductComponent},
  {path:"manageorders", component: ManageOrderComponent},
  {path:"manageproducts", component: ManageProductsComponent},
  {path: "searchresults", component: CategoriesComponent},
  { path: 'manageproducts/:id/edit', component: EditProductComponent },
  {path:"**", redirectTo:"register", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
