import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ViewVideoPage } from './pages/view-video/view-video.page';
import { ModalroomsPageModule } from './pages/modalrooms/modalrooms.module';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent, ViewVideoPage],
  entryComponents: [ViewVideoPage],
  imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  ComponentsModule,
  HttpClientModule,
  ModalroomsPageModule
],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
