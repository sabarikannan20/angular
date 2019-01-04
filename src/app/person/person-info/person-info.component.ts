import { Component, Input } from '@angular/core';
import { PersonInfo } from './person-info.model';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent {

  personInfo = new PersonInfo();
  isIdDisable: boolean;

  @Input('personData')

  set personData(personData: any) {    
    if(typeof personData === 'string' && personData === 'addNew') {
      this.personInfo = new PersonInfo();
    } else if(typeof personData === 'object' && personData) {
      this.personInfo.id = personData.personId;
      this.personInfo.firstName = personData.personFirstName;
      this.personInfo.lastName = personData.personLastName;
      this.personInfo.email = personData.email;
      this.personInfo.dob = personData.dob;
    }
  }
}
