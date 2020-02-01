import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarShopPage } from './car-shop.page';

describe('CarShopPage', () => {
  let component: CarShopPage;
  let fixture: ComponentFixture<CarShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
