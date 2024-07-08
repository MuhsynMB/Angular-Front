// createnewcase.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'app-createnewcase',
  templateUrl: './createnewcase.component.html',
  styleUrls: ['./createnewcase.component.css']
})
export class CreateNewCaseComponent implements OnInit {
  caseForm!: FormGroup;

  constructor(

    private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.caseForm = this.fb.group({
      caseName: ['',Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const caseData = this.caseForm.value;
    let existingCases = JSON.parse(localStorage.getItem('cases') || '[]');

    existingCases.push(caseData);
    localStorage.setItem('cases', JSON.stringify(existingCases));
    this.caseForm.reset();
  }
}

