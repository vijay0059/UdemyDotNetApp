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
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.model).subscribe( () => {
      console.log('Registered Successfully');
    }, error => {
      console.log(error.error);
    });
  }

  cancle() {
    this.cancleRegister.emit(false);
    console.log('Cancled');
  }
}
