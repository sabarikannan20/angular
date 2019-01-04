import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['../person/person.component.css']
})
export class AddressComponent {

  constructor() { }

  addressObj: any;

  onAddressSelected(event) {
    this.addressObj = event;
  }
}
