import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  onAddressClick() {
    this.router.navigate(['/address'], {relativeTo: this.route});
  }

  onPersonClick() {
    this.router.navigate(['/person'], {relativeTo: this.route});
  }
}
