import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComptaAgentPage } from './compta-agent.page';

describe('ComptaAgentPage', () => {
  let component: ComptaAgentPage;
  let fixture: ComponentFixture<ComptaAgentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptaAgentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComptaAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
