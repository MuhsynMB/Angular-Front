// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
 // Adjust the path as necessary

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSignup() {
    if (this.userService.signUp(this.username, this.password)) {
      this.router.navigate(['/login']); // Navigate to login on successful signup
    } else {
      alert('Username already exists');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }
}
