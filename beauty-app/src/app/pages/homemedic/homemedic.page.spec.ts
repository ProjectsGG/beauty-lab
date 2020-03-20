import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomemedicPage } from './homemedic.page';

describe('HomemedicPage', () => {
  let component: HomemedicPage;
  let fixture: ComponentFixture<HomemedicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemedicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomemedicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
