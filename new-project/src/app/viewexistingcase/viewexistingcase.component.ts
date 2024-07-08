import { Component, OnInit } from '@angular/core';
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'app-viewexistingcase',
  templateUrl: './viewexistingcase.component.html',
  styleUrl: './viewexistingcase.component.css'
})
export class ViewexistingcaseComponent implements OnInit {
  cases: any[] = [];

  ngOnInit(): void {
    this.loadCases();
  }

  loadCases(): void {
    let casesString = localStorage.getItem('cases');
this.cases = casesString ? JSON.parse(casesString) : [];

  }

  deleteCase(index: number): void {
    this.cases.splice(index, 1);
    localStorage.setItem('cases', JSON.stringify(this.cases));
  }

  updateCase(index: number, updatedCase: any): void {
    this.cases[index] = updatedCase;
    localStorage.setItem('cases', JSON.stringify(this.cases));
  }
}

