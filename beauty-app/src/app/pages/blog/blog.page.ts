import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  blogUrl:SafeResourceUrl;
  constructor(private browser : InAppBrowser, 
    private domSanitizer : DomSanitizer) { }

    url = "https://beautylabapp.blogspot.com"; 
    OpenUrl(url:string, target:string){
      const link = url;
      this.browser.create(link,target); 
    }
  ngOnInit() {
    this.blogUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://beautylabapp.blogspot.com");
  }

}
