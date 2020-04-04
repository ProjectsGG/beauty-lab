import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSpypPage } from './modal-spyp.page';

describe('ModalSpypPage', () => {
  let component: ModalSpypPage;
  let fixture: ComponentFixture<ModalSpypPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSpypPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSpypPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
