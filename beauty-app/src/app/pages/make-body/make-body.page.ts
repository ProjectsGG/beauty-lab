import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-make-body',
  templateUrl: './make-body.page.html',
  styleUrls: ['./make-body.page.scss'],
})
export class MakeBodyPage implements OnInit {
unityUrl: SafeResourceUrl;
  constructor(private browser: InAppBrowser,
              private domSanitizer: DomSanitizer) { }
  url = 'http://sasweb.com.co/f3/';
  OpenUrl(url: string, target: string) {
    const link = url;
    this.browser.create(link, target);

  }

  ngOnInit() {
    this.unityUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('http://sasweb.com.co/f3/');
  }

}
