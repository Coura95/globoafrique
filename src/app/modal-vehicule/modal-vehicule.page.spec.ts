import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalVehiculePage } from './modal-vehicule.page';

describe('ModalVehiculePage', () => {
  let component: ModalVehiculePage;
  let fixture: ComponentFixture<ModalVehiculePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVehiculePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
