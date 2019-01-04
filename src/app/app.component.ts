import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public entityOpted: string;
  public isAddress: boolean;
  public isPerson: boolean;

  ngOnInit() {
    this.isPerson = true;
  }

  entitySelected(event)  {
    this.entityOpted = event;
    if(this.entityOpted === 'address') {
      this.isAddress = true;
      this.isPerson = false;
    } else {
      this.isAddress = false;
      this.isPerson = true;
    }
  }
}
