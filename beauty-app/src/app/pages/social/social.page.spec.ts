import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialPage } from './social.page';

describe('SocialPage', () => {
  let component: SocialPage;
  let fixture: ComponentFixture<SocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
