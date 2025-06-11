import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/login.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private serviceLogin: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.value;
      this.serviceLogin.validaLogin(usuario).subscribe(x => {
        if (x == true) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Usuário ou senha inválidos');
        }
      });
    }
  }

}
