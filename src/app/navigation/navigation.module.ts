import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
  ],
  exports: [
    NavigationBarComponent,
  ]
})
export class NavigationModule { }
