import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressInfoComponent } from './address-info/address-info.component';

const routes: Routes = [
  { path: '', component: EntitiesComponent, children: [
    { path: 'person', component: PersonListComponent, children: [
      { path: 'new', component: PersonInfoComponent },
      { path: ':id', component: PersonInfoComponent }
    ] },
    { path: 'address', component: AddressListComponent, children: [
      { path: 'new', component: AddressInfoComponent },
      { path: ':id', component: AddressInfoComponent }
    ] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
