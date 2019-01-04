import { Component, OnInit, Output, EventEmitter, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Output()
  personSelected = new EventEmitter();
  persons: any;

  ngOnInit() {
    this.http.get('../../../assets/person.json').subscribe(data => {
      this.persons = data;
      this.personSelected.emit(this.persons[0]);
    });
  }

  onRowClick(person: any) {
    this.personSelected.emit(person);
      }

  onAddClick(event) {
    this.personSelected.emit(event.target.id);
  }
}
