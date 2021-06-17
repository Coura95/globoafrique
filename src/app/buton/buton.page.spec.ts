import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButonPage } from './buton.page';

describe('ButonPage', () => {
  let component: ButonPage;
  let fixture: ComponentFixture<ButonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
