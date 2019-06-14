import { ModuleWithProviders } from '@angular/core';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { GuardService } from './services/guard.service';
import { Routes, RouterModule } from '@angular/router';

import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { RegisterProductComponent } from './product/register-product/register-product.component';


const routes:Routes = [
    /*{path:'',component:LoginUserComponent},
    {path:'list/user',component:ListUserComponent, canActivate: [GuardService]},
    {path:'register/user',component:RegisterUserComponent},
    {path:'edit/user/:id',component:EditUserComponent, canActivate: [GuardService]},*/

    {path:'user',loadChildren:'./user/user.module#UserModule'},
    {path:'product',loadChildren:'./product/product.module#ProductModule'},

    /*{path:'list/product',component:ListProductComponent, canActivate: [GuardService]},
    {path:'register/product',component:RegisterProductComponent},
    {path:'edit/product/:id',component:EditProductComponent, canActivate: [GuardService]},*/

    // otherwise redirect to login
    { path: '**', redirectTo: '' }
  ];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);