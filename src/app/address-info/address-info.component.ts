import { Component, OnInit } from '@angular/core';
import { AddressInfo } from './address-info.model';
import { ActivatedRoute, Params } from '@angular/router';
import { AddressListService } from '../address-list/address-list.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private addressListService: AddressListService) {}

  addressInfo = new AddressInfo();

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        if (param['id']) {
          this.getAddressById(+param['id']);
        } else {
          this.addressInfo = new AddressInfo();
        }
      }
    );
  }

  getAddressById(addressId: number) {
    this.addressListService.getAddressById(addressId).subscribe(
      (data: AddressInfo) => {
        this.addressInfo = data;
      }
    );
  }

  onSubmitClick() {
    this.addressListService.createAddress(this.addressInfo).subscribe(data => {

    });
  }
}
