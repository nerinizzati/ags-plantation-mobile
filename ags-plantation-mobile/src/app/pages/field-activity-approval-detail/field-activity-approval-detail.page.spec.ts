import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldActivityApprovalDetailPage } from './field-activity-approval-detail.page';

describe('FieldActivityApprovalDetailPage', () => {
  let component: FieldActivityApprovalDetailPage;
  let fixture: ComponentFixture<FieldActivityApprovalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldActivityApprovalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldActivityApprovalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
