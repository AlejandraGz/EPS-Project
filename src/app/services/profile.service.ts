import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { TokenService } from './token.service';


const apiURL = GlobalConstants.apiURL;


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  headers = new HttpHeaders({
    token: this.tokenService.getToken(), // Declaración de Headers almacenando el token
  });


  constructor(private http: HttpClient, private tokenService: TokenService) {}


  uploadPhotoProfile(photoProfile: any) {
    return this.http.post(
      `${apiURL}/profile/updatePhotoProfile`,
      photoProfile,
      { headers: this.headers }  // Se adiciona el header con el token a la solicitud de API
    );
  }


  getProfile() {
    return this.http.get(`${apiURL}/profile/getProfile`, {
      headers: this.headers,  // Se adiciona el header con el token a la solicitud de API
    });
  }
}
