import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintStationnnementPage } from './print-stationnnement.page';

describe('PrintStationnnementPage', () => {
  let component: PrintStationnnementPage;
  let fixture: ComponentFixture<PrintStationnnementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintStationnnementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintStationnnementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
