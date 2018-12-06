import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Dating App';

  jwtHelper = new JwtHelperService();

  decodeToken: any;

  constructor(private auth: AuthService) {}
  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.auth.decodeToken = this.jwtHelper.decodeToken(token);
    }
  }

}
