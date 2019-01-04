import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {

  constructor() { }

  @Output()
  entityValue = new EventEmitter();

  entitySelected: string;

  onEntitySelect(event){
    this.entitySelected = event.target.id;
    this.entityValue.emit(this.entitySelected);
  }
}
