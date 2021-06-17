import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptabilitePage } from './comptabilite.page';

describe('ComptabilitePage', () => {
  let component: ComptabilitePage;
  let fixture: ComponentFixture<ComptabilitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptabilitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptabilitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
