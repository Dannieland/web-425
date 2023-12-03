//Danielle Taplin
//sign-in.component.ts
//12/1/2023
//sign in component for gpa calculator app


//import components
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

//create and export sign in component
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm!: FormGroup;
  errorMessage!: string;

  constructor(private router: Router, private CookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: ''
    })
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signInService.validate(studentId)) {
      this.CookieService.set('session_user', studentId.toString(), 1);
       this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid Student ID';
    }
  }

}
