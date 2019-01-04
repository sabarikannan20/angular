import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  personObject: any;

  ngOnInit() {
  }

  onPersonSelected(event){
    this.personObject = event;
    // console.log(this.personObject)
  }
}
