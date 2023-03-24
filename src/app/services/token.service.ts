import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'session';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) { }

  saveToken(token: string) {
    this.cookieService.set(TOKEN_KEY, token);
  }
  getToken() { 
    return this.cookieService.get(TOKEN_KEY);
  }
  isAuthenticated() {
    return this.cookieService.check(TOKEN_KEY)
  }
  deleteToken() {
    this.cookieService.delete(TOKEN_KEY);
  }
}
