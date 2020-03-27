import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeplanPage } from './makeplan.page';

describe('MakeplanPage', () => {
  let component: MakeplanPage;
  let fixture: ComponentFixture<MakeplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeplanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
