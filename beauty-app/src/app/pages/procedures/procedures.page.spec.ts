import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProceduresPage } from './procedures.page';

describe('ProceduresPage', () => {
  let component: ProceduresPage;
  let fixture: ComponentFixture<ProceduresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
