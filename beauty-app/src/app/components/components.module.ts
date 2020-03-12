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
import { PopoverpostComponent } from './popoverpost/popoverpost.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent,
    ProfileReviewBlogComponent,
    PurchaseSuccessComponent,
    PopoverpostComponent,
    PostComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ProfileDataComponent,
    ProfilePhotosComponent,
    ProfileReviewBlogComponent,
    PurchaseSuccessComponent,
    PopoverpostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
