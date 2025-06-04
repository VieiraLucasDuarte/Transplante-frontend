import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/login.service';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private serviceLogin: LoginService
  ) {}
  ngOnInit(): void {
  }

  login() {
    console.log("vai fazer ");
    this.serviceLogin.validaLogin().subscribe( x => {
      console.log(x)
    });
    console.log("feitor");
  }

}
