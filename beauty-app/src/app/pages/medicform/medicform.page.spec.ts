import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicformPage } from './medicform.page';

describe('MedicformPage', () => {
  let component: MedicformPage;
  let fixture: ComponentFixture<MedicformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
