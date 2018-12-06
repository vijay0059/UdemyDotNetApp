import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancleRegister = new EventEmitter();
  model: any = {};
  constructor(public auth: AuthService, public alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.model).subscribe( () => {
      this.alertify.message('Registered Successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancle() {
    this.cancleRegister.emit(false);
    console.log('Cancled');
  }
}
