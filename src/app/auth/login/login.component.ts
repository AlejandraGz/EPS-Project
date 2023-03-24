import { TokenService } from 'src/app/services/token.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(
    private authService: AuthService, 
    private tokenService: TokenService,
    private router: Router,
    ) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(f: any) {
    // f.value {email: "correo@...", password: "/&$%&$#"}
    // f.valid true || false
    console.log(f.value)
    if (f.valid) {
      this.authService.login(f.value).subscribe({
        next: (result)=> {
          this.tokenService.saveToken(result.token)
          const decoded:any = this.authService.getUser()
          if (decoded.role === 'User') {
            this.router.navigate(['/afiliados'])
          }
          if (decoded.role === 'Admin') {
            this.router.navigate(['/admin'])
          }
          
          
          
        },
        error: (e)=> {
          console.log(e.error.message);
          alert(e.error.message)
        }
      })
    } else {
      alert("Datos incompletos, por favor rellenar los campos obligatorios");
    }
  }
}
