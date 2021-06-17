import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewstationnementsPage } from './newstationnements.page';

describe('NewstationnementsPage', () => {
  let component: NewstationnementsPage;
  let fixture: ComponentFixture<NewstationnementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstationnementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewstationnementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
