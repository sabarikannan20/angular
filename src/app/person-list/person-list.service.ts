import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonInfo } from '../person-info/person-info.model';
import { Subject } from 'rxjs';

@Injectable()
export class PersonListService {

  constructor(private http: HttpClient) {}

  personObtained = new Subject();

  getPersonList() {
    return this.http.get('http://192.168.20.144:8080/ws/do/person');
  }

  getPersonById(id: number) {
    return this.http.get('http://192.168.20.144:8080/ws/do/person?id=' + id);
  }

  createNewPerson(person: PersonInfo) {
    return this.http.put('http://192.168.20.144:8080/ws/do/person', person);
  }
}
