import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArealStatementMapsPage } from './areal-statement-maps.page';

describe('ArealStatementMapsPage', () => {
  let component: ArealStatementMapsPage;
  let fixture: ComponentFixture<ArealStatementMapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArealStatementMapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArealStatementMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
