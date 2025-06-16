import { Component, OnInit } from '@angular/core';
import { AuthCredentials } from '../../core/models/authCredentials';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../core/services/authentification.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxSpinnerModule,
    MessagesModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public user: AuthCredentials = {
    password : "",
    userName: ""
  }

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthentificationService,
    private router: Router,
    private messageService: MessageService
   ) {

      this.loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });

      if(this.authService.GetToken()) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit(): void {}


  public submitFormLogin() {
    if(this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }

    this.user.userName = this.loginForm.value.username;
    this.user.password = this.loginForm.value.password;

    this.authService.Login(this.user).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.messageService.clear();
        this.messageService.add({severity:'error', summary:'', detail:'Usuario y/o contraseña invalidos'});
      }
    });
  }

  public get f():any {
    return this.loginForm.controls;
  }
}
