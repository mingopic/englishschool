import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AuthentificationService } from '../shared/authentification.service';
import { SpinnerService } from '../shared/spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthentificationService,
    private spinnerService: SpinnerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.showSpinner();
    const token = this.authService.GetToken()

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(cloned).pipe(
        finalize( () => this.spinnerService.hideSpinner())
      );
    }
    return next.handle(request).pipe(
      finalize( () => this.spinnerService.hideSpinner())
    );
  }
}
