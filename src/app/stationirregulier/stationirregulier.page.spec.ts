import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StationirregulierPage } from './stationirregulier.page';

describe('StationirregulierPage', () => {
  let component: StationirregulierPage;
  let fixture: ComponentFixture<StationirregulierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationirregulierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StationirregulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
