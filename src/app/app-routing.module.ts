import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'products/:productsId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
