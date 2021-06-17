import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintAbonnnementPage } from './print-abonnnement.page';

describe('PrintAbonnnementPage', () => {
  let component: PrintAbonnnementPage;
  let fixture: ComponentFixture<PrintAbonnnementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintAbonnnementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintAbonnnementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
