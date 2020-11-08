import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldActivityHistoryDetailAdminPage } from './field-activity-history-detail-admin.page';

describe('FieldActivityHistoryDetailAdminPage', () => {
  let component: FieldActivityHistoryDetailAdminPage;
  let fixture: ComponentFixture<FieldActivityHistoryDetailAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldActivityHistoryDetailAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldActivityHistoryDetailAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
