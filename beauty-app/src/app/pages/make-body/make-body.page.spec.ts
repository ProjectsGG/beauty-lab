import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeBodyPage } from './make-body.page';

describe('MakeBodyPage', () => {
  let component: MakeBodyPage;
  let fixture: ComponentFixture<MakeBodyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeBodyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
