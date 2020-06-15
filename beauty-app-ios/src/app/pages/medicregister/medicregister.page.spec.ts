import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicregisterPage } from './medicregister.page';

describe('MedicregisterPage', () => {
  let component: MedicregisterPage;
  let fixture: ComponentFixture<MedicregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
