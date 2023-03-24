import { TokenService } from 'src/app/services/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient, 
    private tokenService: TokenService, 
    private router: Router) {}

  apiUrl: string = GlobalConstants.apiURL; // "http://localhost:3000/api/v1"

  signup(userObj: {fullName: string; email: string; password: string, role: string }) {
    return this.http.post<any>(`${this.apiUrl}/auth/registrarse`, userObj);
  }

  login(userObj: {email: string, password: string, role: string}){
    return this.http.post<any>(`${this.apiUrl}/auth/iniciarSesion`, userObj);
  }
  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['/'])
  }
  getUser(){
    return jwtDecode(this.tokenService.getToken())
  }
}
