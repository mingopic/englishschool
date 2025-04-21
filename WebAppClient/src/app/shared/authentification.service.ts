import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthCredentials } from '../model/authCredentials';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient, private router: Router) { }

  Login(creds: AuthCredentials) {
    return this.http.post(`${this.baseUrl}`+"/login", creds, { 
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);

      // Extraer y almacenar el nombre de usuario del token
      const payload = this.decodeJwt(token);
      const name = payload.name;
      localStorage.setItem('name', name);

      return body;
    }))
  }
  
  GetToken() {
    return localStorage.getItem('token');
  }

  LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.router.navigate(['login']);
  }

  // Función para decodificar un token JWT y obtener el payload
  private decodeJwt(token: string): any {
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));
    return payload;
  }
}
