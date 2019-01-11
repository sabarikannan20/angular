import { Component, OnInit } from '@angular/core';
import { PersonInfo } from './person-info.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonListService } from '../person-list/person-list.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private personListService: PersonListService) { }

  personId: number;
  personInfo = new PersonInfo();

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.onRowClick(+params['id']);
        } else {
          this.personInfo = new PersonInfo();
        }
      }
    );
  }

  onRowClick(personId: number) {
    this.personListService.getPersonById(personId).subscribe(
      (data: PersonInfo) => {
        this.personInfo = data;
    });
  }

  onSubmitSelect() {
    this.personListService.createNewPerson(this.personInfo).subscribe(
      (data: PersonInfo) => {
        if (data.id) {
          this.personListService.personObtained.next(data);
          this.personInfo = new PersonInfo();
        }
    });
  }

  onSubmitClick(person) {
    console.log(person);
  }
}
