import { Component, Input } from '@angular/core';
import { AddressInfo } from './address-info.model';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent {

  addressInfo = new AddressInfo();

  @Input('addressData')

  set addressData(addressData: any) {
    addressData = addressData;
    if(typeof addressData === 'string' && addressData === 'addNew') {
      this.addressInfo = new AddressInfo();
    } else if(addressData) {
      this.addressInfo.id = addressData.id;
      this.addressInfo.street = addressData.street;
      this.addressInfo.city = addressData.city;
      this.addressInfo.postal_code = addressData.postal_code;
    }
  }
}
