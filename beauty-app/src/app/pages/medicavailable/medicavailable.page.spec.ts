import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicavailablePage } from './medicavailable.page';

describe('MedicavailablePage', () => {
  let component: MedicavailablePage;
  let fixture: ComponentFixture<MedicavailablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicavailablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicavailablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
