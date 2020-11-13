import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authenticationservice/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string;
  errormessage = '';

  constructor( private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): any {
  }

}
