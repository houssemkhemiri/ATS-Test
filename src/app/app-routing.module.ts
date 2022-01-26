import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {AllProductsComponent} from "./all-products/all-products.component";

const routes: Routes = [
  {path: 'product/:id', component: ProductComponent},
  {path: 'products', component: AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
