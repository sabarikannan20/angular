import { Component, OnInit, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['../../person/person-list/person-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Output()
  addressSelected = new EventEmitter();

  addressJson: any;

  ngOnInit() {
    this.http.get('../../../assets/address.json').subscribe(data => {
      this.addressJson = data;
      this.addressSelected.emit(this.addressJson[0]);
    });
  }

  onAddressRowClick(address){
    this.addressSelected.emit(address);
  }

  onAddClick(event) {
    this.addressSelected.emit(event.target.id);
  }
}
