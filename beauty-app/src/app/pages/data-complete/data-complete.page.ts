import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from '../../interfaces/user';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-data-complete',
  templateUrl: './data-complete.page.html',
  styleUrls: ['./data-complete.page.scss'],
})
export class DataCompletePage implements OnInit {

  data: User;

  constructor(private service: UserService, private hero: HeroService) { }

  ngOnInit() {
    this.data = this.hero.getUser();
  }

  update() {
    this.service.update(this.data, this.data.id_usuario).subscribe(
      (r: any) => {
        console.log(r);
      }
    );
  }

}
