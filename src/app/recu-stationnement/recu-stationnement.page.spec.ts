import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuStationnementPage } from './recu-stationnement.page';

describe('RecuStationnementPage', () => {
  let component: RecuStationnementPage;
  let fixture: ComponentFixture<RecuStationnementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuStationnementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuStationnementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
