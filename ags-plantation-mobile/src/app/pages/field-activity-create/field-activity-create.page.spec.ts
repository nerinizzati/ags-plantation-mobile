import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldActivityCreatePage } from './field-activity-create.page';

describe('FieldActivityCreatePage', () => {
  let component: FieldActivityCreatePage;
  let fixture: ComponentFixture<FieldActivityCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldActivityCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldActivityCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
