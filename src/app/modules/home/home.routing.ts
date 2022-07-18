import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { IndexComponent } from "./components/index/index.component";
import { TopNavComponent } from "./components/shared/top-nav.component";
import { IndexResolver } from "./components/index/index.resolver";
import { ProductComponent } from "./components/products/products.component";
import { ProductResolver } from "./components/products/products.resolver";
import { SignInComponent } from "./components/signIn/signIn.component";
import { RegisterComponent } from "./components/register/register.component";
import { CartComponent } from "./components/cart/cart.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: IndexComponent, resolve: { data: IndexResolver }, pathMatch: 'full' },
      { path: 'products', component: ProductComponent, resolve: { data: ProductResolver } },
      { path: 'signIn', component: SignInComponent },
      { path: 'register', component: RegisterComponent }

    ]
  }


];

export const route = [
  HomeComponent,
  SignInComponent,
  RegisterComponent,
  CartComponent,
  IndexComponent,
  TopNavComponent,
  ProductComponent,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [IndexResolver, ProductResolver]

})
export class HomeRouting {
  constructor() { }
}
