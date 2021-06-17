import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeStationabonnerPage } from './liste-stationabonner.page';

describe('ListeStationabonnerPage', () => {
  let component: ListeStationabonnerPage;
  let fixture: ComponentFixture<ListeStationabonnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeStationabonnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeStationabonnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
