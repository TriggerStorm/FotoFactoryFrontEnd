import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  newUserForm = new FormGroup({
    username: new FormControl(''),
    passwordHash: new FormControl('')
  });

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }

  save(): void {
    const user = this.newUserForm.value;
    console.table(user);
    this.signupService.addUser(user)
      .subscribe(() => {
      });
  }
}
