import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    
    if (this.username === 'Muhsyn' && this.password === '12345') { 
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
