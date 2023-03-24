import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from '../../services/profile.service'
import { style } from '@angular/animations';


@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.scss']
})
export class AffiliatesComponent {
  user: any;
  profile: any;
  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth();
  fullYear = this.date.getFullYear();
  meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
  clock = `${this.day} de ${this.meses[this.month]} de ${this.fullYear}`;

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark');
  }

  constructor(private authService: AuthService, protected tokenService: TokenService, private profileService: ProfileService) {  }
  ngOnInit() {
    this.getUser();
    this.getProfile();
  }
  getUser() {
    this.user = this.authService.getUser();
    console.log(this.user);
  }
  logout() {
    this.authService.logout();
  }
  uploadImage(e: any) {
    console.log('change photo called');
    const file = e.target.files[0];


    if (!file) {
      return;
    }


    const formData = new FormData();
    formData.append('photo', file);
    this.profileService.uploadPhotoProfile(formData).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        this.profile = response.data;
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }
}
