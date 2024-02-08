import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailOfferComponent} from "./detail-offer/detail-offer.component";
import {NewOfferComponent} from "./offers/new-offer/new-offer.component";
import {UpdateOfferComponent} from "./offers/update-offer/update-offer.component";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {OffersComponent} from "./offers/offers.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./guards/auth.guard";
import {LogOutComponent} from "./log-out/log-out.component";


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},

    {path:"offers",component: OffersComponent},
    {path:"home",component: HomeComponent},
    {path:"detail-offer/:id",component:DetailOfferComponent},
    {path:"new-offer",component:NewOfferComponent},
    {path:"update-offer/:id",component:UpdateOfferComponent},
    {path:"log-out",component:LogOutComponent},
    {path:"nav-bar",component: NavBarComponent,canActivate : [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
