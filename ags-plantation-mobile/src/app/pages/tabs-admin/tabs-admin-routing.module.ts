import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsAdminPage } from './tabs-admin.page';

const routes: Routes = [
  {
    path: 'tabs-admin',
    component: TabsAdminPage,
    children: [
      {
        path: 'field-activity-admin',
        children: [
          { path: '', loadChildren: () => import('../field-activity-admin/field-activity-admin.module').then(m => m.FieldActivityAdminPageModule)},
          { path: 'field-activity-approval', loadChildren: () => import('../field-activity-approval/field-activity-approval.module').then(m => m.FieldActivityApprovalPageModule)},
          { path: 'field-activity-approval/:record_id', loadChildren: () => import('../field-activity-approval-detail/field-activity-approval-detail.module').then( m => m.FieldActivityApprovalDetailPageModule)},
          { path: 'field-activity-history-admin', loadChildren: () => import('../field-activity-history-admin/field-activity-history-admin.module').then( m => m.FieldActivityHistoryAdminPageModule)},
          { path: 'field-activity-history-admin/:record_id', loadChildren: () => import('../field-activity-history-detail-admin/field-activity-history-detail-admin.module').then( m => m.FieldActivityHistoryDetailAdminPageModule)}
        ]
      },
      {
        path: 'report',
        loadChildren: () => import('../report/report.module').then(m => m.ReportPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-admin/field-activity-admin',
        pathMatch: 'full'
      }
     
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-admin/field-activity-admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsAdminPageRoutingModule {}
