import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
  ]
})
export class NavigationModule { }
