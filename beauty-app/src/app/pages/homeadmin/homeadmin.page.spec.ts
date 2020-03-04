import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeadminPage } from './homeadmin.page';

describe('HomeadminPage', () => {
  let component: HomeadminPage;
  let fixture: ComponentFixture<HomeadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
