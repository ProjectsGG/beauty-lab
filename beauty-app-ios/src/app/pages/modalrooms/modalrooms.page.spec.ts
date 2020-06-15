import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalroomsPage } from './modalrooms.page';

describe('ModalroomsPage', () => {
  let component: ModalroomsPage;
  let fixture: ComponentFixture<ModalroomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalroomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalroomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
