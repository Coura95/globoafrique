import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeStationirregulierPage } from './liste-stationirregulier.page';

describe('ListeStationirregulierPage', () => {
  let component: ListeStationirregulierPage;
  let fixture: ComponentFixture<ListeStationirregulierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeStationirregulierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeStationirregulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
