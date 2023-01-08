import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    FooterComponent
  ],
  exports: [
    AboutComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyprofileModule { }
