import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StationnementsPage } from './stationnements.page';

describe('StationnementsPage', () => {
  let component: StationnementsPage;
  let fixture: ComponentFixture<StationnementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationnementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StationnementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
