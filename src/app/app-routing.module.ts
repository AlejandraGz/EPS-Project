import { AuthGuard } from './helpers/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialLayoutComponent } from './layouts/social-layout/social-layout.component';

const routes: Routes = [{
  path: '',
  component: SocialLayoutComponent,
  children: [
    { 
      path: '',
      redirectTo: 'navegacion',
      pathMatch: 'full'
    },
    {
      path: '',
      loadChildren: () => import('./navigation/navigation.module').then ((m) => m.NavigationModule),
    },
   
  ]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'iniciarSesion',
      redirectTo: 'auth/iniciarSesion',
      pathMatch: 'full'
    },
    {
      path: 'registrarse',
      redirectTo: 'auth/registrarse',
      pathMatch: 'full'
    },
    {
      path: 'usuarios',
      redirectTo: 'usuarios',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
      path: '',
      loadChildren: () => import('./users/users.module').then ((m) => m.UsersModule),
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
