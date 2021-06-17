import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuInfractionPage } from './recu-infraction.page';

describe('RecuInfractionPage', () => {
  let component: RecuInfractionPage;
  let fixture: ComponentFixture<RecuInfractionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuInfractionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuInfractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
