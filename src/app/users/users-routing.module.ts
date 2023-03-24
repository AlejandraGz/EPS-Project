import { DoctorsComponent } from './doctors/doctors.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { AdminsComponent } from './admins/admins.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminsComponent
  },
  {
    path: 'afiliados',
    component: AffiliatesComponent
  },
  {
    path: 'doctores',
    component: DoctorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
