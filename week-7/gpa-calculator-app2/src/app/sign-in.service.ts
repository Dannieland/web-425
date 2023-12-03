//Danielle Taplin
//sign-in.service.ts
//12/1/2023
//sign in service for gpa calculator app

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  // Array of student IDs
  studentIds!: Array<number>

  // Constructor for sign-in service
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
  }

  // Validate student ID
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId)
  }
}
