import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntitiesComponent } from './entities/entities.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonListComponent } from './person-list/person-list.component';
import { AddressListComponent } from './address-list/address-list.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { PersonListService } from './person-list/person-list.service';
import { AddressListService } from './address-list/address-list.service';

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    PersonInfoComponent,
    PersonListComponent,
    AddressListComponent,
    AddressInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonListService,
    AddressListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
