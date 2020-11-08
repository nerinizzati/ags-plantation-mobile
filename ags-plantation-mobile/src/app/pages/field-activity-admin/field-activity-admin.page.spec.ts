import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldActivityAdminPage } from './field-activity-admin.page';

describe('FieldActivityAdminPage', () => {
  let component: FieldActivityAdminPage;
  let fixture: ComponentFixture<FieldActivityAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldActivityAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldActivityAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
