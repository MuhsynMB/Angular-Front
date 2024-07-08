import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface CaseFilingData {
  caseType: string;
  namePlaintiff: string;
  nameDefendant: string;
  // Add other fields as needed
}

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  private caseData: CaseFilingData | null = null;

  constructor(private router: Router) {}

  setData(data: CaseFilingData) {
    this.caseData = data;
  }

  getData() {
    return this.caseData;
  }
}