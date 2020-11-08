import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarvestPlanPage } from './harvest-plan.page';

describe('HarvestPlanPage', () => {
  let component: HarvestPlanPage;
  let fixture: ComponentFixture<HarvestPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarvestPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
