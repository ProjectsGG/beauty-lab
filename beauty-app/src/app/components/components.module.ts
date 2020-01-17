import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { ProfileReviewBlogComponent } from './profile-review-blog/profile-review-blog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent,
    ProfileReviewBlogComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent,
    ProfileReviewBlogComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
