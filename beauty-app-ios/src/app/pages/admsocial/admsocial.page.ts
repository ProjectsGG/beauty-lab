import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-admsocial',
  templateUrl: './admsocial.page.html',
  styleUrls: ['./admsocial.page.scss'],
})
export class AdmsocialPage implements OnInit {

  public publications: any[];
  constructor(
    private http: HttpClient,
    public hero: HeroService,
    public router: Router,
    private toast: ToastService,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.getPublications();
  }

  getPublications() {
    this.getService()
    .subscribe((model: any) => {
      this.publications = model.data;
      console.log(this.publications);
    });
  }


  getService() {
    const url = `${this.hero.getUrl()}/blog/posts/4`;
    return this.http.get(url, this.httpOptions);
  }

  viewProfile(id) {
      this.router.navigate(['/profile/' + id]);
  }

  deletePost(data){
    this.getServiceDeletePost(data.id)
    .subscribe((model: any) => {
      this.toast.success('Post, Deleted ');
      this.getPublications();
    });
  }

  getServiceDeletePost(post) {
    const url = `${this.hero.getUrl()}/blog/delete/` + post;
    return this.http.post(url, this.httpOptions);
  }

}
