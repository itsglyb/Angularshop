import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { CheckoutComponent } from './checkout/checkout.component';

import { ShopComponent } from './shop/shop.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { OrdersComponent } from './orders/orders.component';

import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';



const routes: Routes = [
{ path:"", component:HomeComponent },
{ path:"product-single", component:ProductsingleComponent },
{ path:"cart", component:CartComponent },
{ path: "checkout", component:CheckoutComponent },
{ path: "shop", component:ShopComponent},
{ path: "dashboard", component:DashboardComponent},
{ path: "order", component:OrdersComponent},
{ path: "login", component:LoginComponent},
{ path: "signup", component:SignupComponent},
{ path: "forgot-password", component:ForgotPasswordComponent},
{ path: "profile-details", component:ProfileDetailsComponent},

{ path: "admin-orders", component: AdminOrdersComponent},
{ path: "admin-users", component: AdminUsersComponent},
{ path: "admin-dashboard", component: AdminDashboardComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
