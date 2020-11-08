import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldActivityHistoryAdminPage } from './field-activity-history-admin.page';

describe('FieldActivityHistoryAdminPage', () => {
  let component: FieldActivityHistoryAdminPage;
  let fixture: ComponentFixture<FieldActivityHistoryAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldActivityHistoryAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldActivityHistoryAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
