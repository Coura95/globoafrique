import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StationabonnerPage } from './stationabonner.page';

describe('StationabonnerPage', () => {
  let component: StationabonnerPage;
  let fixture: ComponentFixture<StationabonnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationabonnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StationabonnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
