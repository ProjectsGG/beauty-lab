import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmplansPage } from './admplans.page';

describe('AdmplansPage', () => {
  let component: AdmplansPage;
  let fixture: ComponentFixture<AdmplansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmplansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmplansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
