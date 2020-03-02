import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSroomPage } from './modal-sroom.page';

describe('ModalSroomPage', () => {
  let component: ModalSroomPage;
  let fixture: ComponentFixture<ModalSroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
