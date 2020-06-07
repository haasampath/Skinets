import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: ':id', component: ProductDetailsComponent,  data: {breadcrumb: {alias: 'productDetails'}}} ,
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes) // for child means not available for app module only shop module
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
