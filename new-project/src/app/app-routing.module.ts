import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { CreateNewCaseComponent } from './createnewcase/createnewcase.component';
import { ViewexistingcaseComponent } from './viewexistingcase/viewexistingcase.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new', component: CreateNewCaseComponent},
  {path: 'view', component: ViewexistingcaseComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
