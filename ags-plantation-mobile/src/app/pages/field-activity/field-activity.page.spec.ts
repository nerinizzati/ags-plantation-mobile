import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldActivityPage } from './field-activity.page';

describe('FieldActivityPage', () => {
  let component: FieldActivityPage;
  let fixture: ComponentFixture<FieldActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
