import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicprofilePage } from './medicprofile.page';

describe('MedicprofilePage', () => {
  let component: MedicprofilePage;
  let fixture: ComponentFixture<MedicprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
