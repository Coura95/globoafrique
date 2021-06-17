import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalZonePage } from './modal-zone.page';

describe('ModalZonePage', () => {
  let component: ModalZonePage;
  let fixture: ComponentFixture<ModalZonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalZonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
