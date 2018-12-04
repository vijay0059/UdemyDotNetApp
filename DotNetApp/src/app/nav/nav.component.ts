import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = { };
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.auth.login(this.model)
      .subscribe(next => {
        console.log(next);
      }, errors => {
        console.log(errors);
      });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !! token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logout Successfully');
  }

}
