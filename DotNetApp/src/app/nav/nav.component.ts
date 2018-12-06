import { AlertifyService } from './../_services/alertify.service';
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
  constructor(public auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this.auth.login(this.model)
      .subscribe(next => {
        console.log(next);
        this.alertify.success('Login Successfully');
      }, errors => {
        // console.log(errors);
        this.alertify.error(errors);
      });
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logout Successfully');
  }

}
