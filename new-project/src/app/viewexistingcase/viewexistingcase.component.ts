import { Component, OnInit } from '@angular/core';
import { CasesService } from '../services/cases.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewexistingcase',
  templateUrl: './viewexistingcase.component.html',
  styleUrls: ['./viewexistingcase.component.css']
})
export class ViewExistingCaseComponent implements OnInit {
  cases: any;

  constructor(private casesService: CasesService, private router: Router) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases() {
    this.casesService.getCases().subscribe(
      res => {
        this.cases =  res;
        console.log(res);
      }
     );
  }

  loadCases(): void {
    this.casesService.getCases().subscribe(
      data => {
        this.cases = data;
      },
      error => {
        console.error('Error loading cases', error);
      }
    );
  }

  deleteCase(id: any): void {
    this.casesService.deleteCase(id).subscribe(
      (response) => {
          this.ngOnInit();

        // this.cases = this.cases.filter(=> c.id !== id);
      },
      error => {
        console.error('Error deleting case', error);
      }
    );
  }

  updateCase(id: number): void {
    this.router.navigate(['/new',id])

  }
}
