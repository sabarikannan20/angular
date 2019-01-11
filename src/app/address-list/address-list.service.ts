import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressInfo } from '../address-info/address-info.model';

@Injectable()

export class AddressListService {

  constructor(private http: HttpClient) {}

  getAddressList() {
    return this.http.get('http://192.168.20.144:8080/ws/do/address');
  }

  getAddressById(id: number) {
    return this.http.get('http://192.168.20.144:8080/ws/do/address?id=' + id);
  }

  createAddress(address: AddressInfo) {
    return this.http.put('http://192.168.20.144/ws/do/address', address);
  }
}
