import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAbonnePage } from './modal-abonne.page';

describe('ModalAbonnePage', () => {
  let component: ModalAbonnePage;
  let fixture: ComponentFixture<ModalAbonnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAbonnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAbonnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
