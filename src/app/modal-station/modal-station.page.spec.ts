import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalStationPage } from './modal-station.page';

describe('ModalStationPage', () => {
  let component: ModalStationPage;
  let fixture: ComponentFixture<ModalStationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
