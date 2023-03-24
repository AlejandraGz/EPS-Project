import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdminsComponent } from './admins/admins.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DoctorsComponent,
    AdminsComponent,
    AffiliatesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
  ]
})
export class UsersModule { }
