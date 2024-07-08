// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { username: string, password: string }[] = [];

  constructor() { }

  // Method to sign up a new user
  signUp(username: string, password: string): boolean {
    // Check if the username already exists
    if (this.users.some(user => user.username === username)) {
      return false; // Username already exists
    }

    // Add the new user to the users array
    this.users.push({ username, password });
    return true; // Signup successful
  }

  // Method to log in a user
  logIn(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }

  // Optional: Method to get all users (for debugging purposes)
  getUsers(): { username: string, password: string }[] {
    return this.users;
  }
}
