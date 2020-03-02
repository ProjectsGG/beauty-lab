import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmroomsPage } from './admrooms.page';

describe('AdmroomsPage', () => {
  let component: AdmroomsPage;
  let fixture: ComponentFixture<AdmroomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmroomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmroomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
