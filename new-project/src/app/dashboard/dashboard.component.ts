import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) { }

  navigateToCreateNewCase() {
    const id = 0;
    this.router.navigate(['/new',id]);
  }

  navigateToViewExistingCase() {
    this.router.navigate(['/view']);
  }
}
