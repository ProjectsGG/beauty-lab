import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
