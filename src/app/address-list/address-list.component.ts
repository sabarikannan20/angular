import { Component, OnInit } from '@angular/core';
import { AddressListService } from './address-list.service';
import { AddressInfo } from '../address-info/address-info.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['../person-list/person-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor(private addressListService: AddressListService) { }

  addressList: AddressInfo;

  ngOnInit() {
    this.getPersonList();
  }

  getPersonList() {
    this.addressListService.getAddressList().subscribe(
      (data: AddressInfo) => {
        this.addressList = data;
      }
    );
  }
}
