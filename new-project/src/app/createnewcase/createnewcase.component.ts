import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { CasesService } from '../services/cases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-createnewcase',
  templateUrl: './createnewcase.component.html',
  styleUrls: ['./createnewcase.component.css']
})
export class CreateNewCaseComponent implements OnInit {
  caseForm!: FormGroup;
  id: any
  case: any
  constructor(
    private fb: FormBuilder,
    private casesService: CasesService,
    private route: ActivatedRoute,
    private router: Router
  
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.id = data["id"];
    })

    this.caseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      createdAt: [new Date(), Validators.required]
    });

    if(this.id != 0){
      this.casesService.getCaseById(this.id).subscribe(response=>{
        this.case = response;
        console.log("case "+ this.case )
        this.caseForm.patchValue(this.case) 
      })    
    }
    else{
      this.id = null;
    }
    
  }

  saveCases(): void {
    if (this.caseForm.valid) {
      const caseData = this.caseForm.value;
      this.casesService.createCase(caseData).subscribe(
        response => {
          console.log('Case created successfully', response);
          this.caseForm.reset();
          this.router.navigate(['/view'])
        },
        error => {
          console.error('Error creating case', error);
        }
      );
    }
  }

  updateCases(): void {
    if (this.caseForm.valid) {
      const caseData = this.caseForm.value;
      this.casesService.updateCase(this.id,caseData).subscribe(
        response => {
          console.log('Case created successfully', response);
          this.caseForm.reset();
          this.router.navigate(['/view'])
        },
        error => {
          console.error('Error creating case', error);
        }
      );
    }
  }
}
