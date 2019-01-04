import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntitiesComponent } from './entities/entities.component';
import { PersonComponent } from './person/person.component';
import { PersonInfoComponent } from './person/person-info/person-info.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressInfoComponent } from './address/address-info/address-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    PersonComponent,
    PersonInfoComponent,
    PersonListComponent,
    AddressComponent,
    AddressListComponent,
    AddressInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
