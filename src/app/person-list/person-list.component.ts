import { Component, OnInit } from '@angular/core';
import { PersonListService } from './person-list.service';
import { PersonInfo } from '../person-info/person-info.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personListService: PersonListService, private router: Router, private route: ActivatedRoute) { }
  personList: any;
  person: any;

  ngOnInit() {
    this.getPersonList();
    this.personListService.personObtained.subscribe(
      (data: PersonInfo) => {
        console.log(data);
        this.getPersonList();
        this.router.navigate([data.id], { relativeTo: this.route});
      }
    );
  }

  getPersonList() {
    this.personListService.getPersonList().subscribe(data => {
      this.personList = data;
    });
  }
}
