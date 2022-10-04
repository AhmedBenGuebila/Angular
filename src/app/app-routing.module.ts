import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {ContactComponent} from "./contact/contact.component";
import {UserListComponent} from "./user-list/user-list.component";
import {NotfoundComponent} from "./notfound/notfound.component";


const ROUTES: Routes =[

  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent},
  {path:'product',component:ListProductComponent},
  {path:'contact',component:ContactComponent},
  {path:'user',component:UserListComponent},
  {path:'**',component:NotfoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
