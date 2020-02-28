import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule, PopoverController } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { ProfileReviewBlogComponent } from './profile-review-blog/profile-review-blog.component';
import { PurchaseSuccessComponent } from './purchase-success/purchase-success.component';




@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent,
    ProfileReviewBlogComponent,
    PurchaseSuccessComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent,
    ProfileReviewBlogComponent,
    PurchaseSuccessComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
