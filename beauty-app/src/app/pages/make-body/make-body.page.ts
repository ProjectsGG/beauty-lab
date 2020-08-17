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
  url = 'http://sassweb.com.co/test/';
  OpenUrl(url: string, target: string) {
    const link = url;
    this.browser.create(link, target);

  }

  ngOnInit() {
    this.unityUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('http://sassweb.com.co/test/');
  }

}
