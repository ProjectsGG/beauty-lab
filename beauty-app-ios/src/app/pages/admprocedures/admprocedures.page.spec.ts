import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmproceduresPage } from './admprocedures.page';

describe('AdmproceduresPage', () => {
  let component: AdmproceduresPage;
  let fixture: ComponentFixture<AdmproceduresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmproceduresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmproceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
