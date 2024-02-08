import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewOfferComponent } from './offers/new-offer/new-offer.component';
import { UpdateOfferComponent } from './offers/update-offer/update-offer.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiceOffer} from "./services/service.offer";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import { DialogModifyComponent } from './dialog-modify/dialog-modify.component';
import { HomeComponent } from './home/home.component';
import { DataStateService } from './services/data-state.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { RechercheComponent } from './offers/offer-nav-bar/recherche/recherche.component';
import { OffersComponent } from './offers/offers.component';
import { OfferNavBarComponent } from './offers/offer-nav-bar/offer-nav-bar.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import {RequestInterceptorService} from "./services/request-interceptor.service";
import {LogOutComponent} from "./log-out/log-out.component";





@NgModule({
  declarations: [
    AppComponent,
    NewOfferComponent,
    UpdateOfferComponent,
    DetailOfferComponent,
    DialogDetailComponent,
    DialogModifyComponent,
    HomeComponent,
    NavBarComponent,
    HeaderComponent,
    RechercheComponent,
    OffersComponent,
    OfferNavBarComponent,
    StatusComponent,
    LoginComponent,
    LogOutComponent

  ],
    imports: [
        BrowserModule, AppRoutingModule,
        HttpClientModule, ReactiveFormsModule, MatStepperModule,
        MatInputModule, MatButtonModule, MatFormFieldModule,
        MatSelectModule, MatListModule, BrowserAnimationsModule,
        MatIconModule, MatChipsModule, MatAutocompleteModule,
        MatTableModule,MatPaginatorModule,MatDialogModule,FormsModule
    ],
  exports: [MatInputModule,MatFormFieldModule],
  providers: [ServiceOffer,DataStateService,
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    },
    {provide: HTTP_INTERCEPTORS,useClass: RequestInterceptorService,multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
