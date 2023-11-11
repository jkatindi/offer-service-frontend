import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiceOffer} from "./services/service.offer";
import {HttpClientModule} from "@angular/common/http";
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
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOfferComponent,
    UpdateOfferComponent,
    ListOfferComponent,
    DetailOfferComponent,
    DialogDetailComponent,
    DialogModifyComponent,
    HomeComponent,
    RechercheComponent
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
  providers: [ServiceOffer,
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
