import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthCredentials } from 'src/app/model/authCredentials';
import { AuthentificationService } from 'src/app/shared/authentification.service';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
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
    private spinnerService: SpinnerService,
    private messageService: MessageService) {

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
      next: (response) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.messageService.clear();
        this.messageService.add({severity:'error', summary:'', detail:'Usuario y/o contraseña invalidos'});
      }
    });
  }

  public get f():any {
    return this.loginForm.controls;
  }

}
