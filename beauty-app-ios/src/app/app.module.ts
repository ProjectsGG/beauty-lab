import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewVideoPage } from './pages/view-video/view-video.page';
import { ModalroomsPageModule } from './pages/modalrooms/modalrooms.module';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { PayPal } from '@ionic-native/paypal/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Network } from '@ionic-native/network/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@NgModule({
  declarations: [AppComponent, ViewVideoPage],
  entryComponents: [ViewVideoPage],
  imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  ComponentsModule,
  HttpClientModule,
  ModalroomsPageModule,
  IonicStorageModule.forRoot()
],
  providers: [
    SplashScreen,
    StatusBar,
    StatusBar,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PayPal,
    YoutubeVideoPlayer,
    File,
    WebView,
    FilePath,
    SMS,
    ScreenOrientation,
    SocialSharing,
    Instagram,
    EmailComposer,
    Network,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
