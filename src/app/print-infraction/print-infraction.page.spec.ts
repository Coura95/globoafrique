import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintInfractionPage } from './print-infraction.page';

describe('PrintInfractionPage', () => {
  let component: PrintInfractionPage;
  let fixture: ComponentFixture<PrintInfractionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintInfractionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintInfractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
