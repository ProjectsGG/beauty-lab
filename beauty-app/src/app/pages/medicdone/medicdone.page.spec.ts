import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicdonePage } from './medicdone.page';

describe('MedicdonePage', () => {
  let component: MedicdonePage;
  let fixture: ComponentFixture<MedicdonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicdonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicdonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
