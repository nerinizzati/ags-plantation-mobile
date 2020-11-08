import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArealStatementPage } from './areal-statement.page';

describe('ArealStatementPage', () => {
  let component: ArealStatementPage;
  let fixture: ComponentFixture<ArealStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArealStatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArealStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
