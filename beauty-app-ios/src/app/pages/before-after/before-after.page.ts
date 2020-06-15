import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ToastService } from '../../services/toast.service';
import { UserService } from '../../services/user.service';
import { Img } from '../../interfaces/img';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BeforeAfterService } from '../../services/before-after.service';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.page.html',
  styleUrls: ['./before-after.page.scss'],
})
export class BeforeAfterPage implements OnInit {
  loading = false;
  segment = 'before';
  results = [{
    surgery: 'Super model plan',
    client: 'Andrea',
    before: ['https://www1.plasticsurgery.org/include/images/photogallery/cases/46141/35462-102132b_scaled.jpg'],
    after: ['https://www1.plasticsurgery.org/include/images/photogallery/cases/46141/35462-102132a_scaled.jpg'],
    segment: 'before'
  },
  {
    surgery: 'Breast',
    client: 'Claudia',
    before: ['https://www1.plasticsurgery.org/include/images/photogallery/cases/114992/37668-107827b_AM.jpg'],
    after: ['https://www1.plasticsurgery.org/include/images/photogallery/cases/114992/37668-107827a_AM.jpg'],
    segment: 'before'
  },
  {
    surgery: '3d plan, Breast',
    client: 'Monica',
    before: ['https://www1.plasticsurgery.org/include/images/photogallery/cases/60513/36967-106180b_scaled.jpg'],
    after: ['https://www1.plasticsurgery.org/include/images/photogallery/cases/60513/36967-106180a_scaled.jpg'],
    segment: 'before'
  }];
  constructor(public hero: HeroService, private toast: ToastService, public service: BeforeAfterService) { }

  ngOnInit() {
    // this.getCases();
  }
  segmentChanged(ev: any, i) {
    this.results[i].segment = ev.detail.value;
  }
  getCases() {
    this.service.getCases().subscribe((r: any) => {
      console.log(r);
    });
  }
}
