import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})


export class CasesService {
  private apiUrl = 'http://localhost:8080/api/cases';

  constructor(private http: HttpClient) {}

  getCases(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getCaseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createCase(caseData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/post", caseData).pipe(
      catchError(this.handleError)
    );
  }

  updateCase(id: number, caseData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, caseData).pipe(
      catchError(this.handleError)
    );
  }
  

  deleteCase(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
