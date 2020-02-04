import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlansDetailPage } from './plans-detail.page';

describe('PlansDetailPage', () => {
  let component: PlansDetailPage;
  let fixture: ComponentFixture<PlansDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlansDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
