import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicpatientPage } from './medicpatient.page';

describe('MedicpatientPage', () => {
  let component: MedicpatientPage;
  let fixture: ComponentFixture<MedicpatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicpatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicpatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
