import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalLikesPage } from './modal-likes.page';

describe('ModalLikesPage', () => {
  let component: ModalLikesPage;
  let fixture: ComponentFixture<ModalLikesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLikesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalLikesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
