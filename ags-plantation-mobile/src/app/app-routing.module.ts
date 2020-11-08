import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./pages/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'areal-statement',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  /*{
    path: 'field-activity',
    loadChildren: () => import('./pages/field-activity/field-activity.module').then( m => m.FieldActivityPageModule)
  },
  {
    path: 'harvest-plan',
    loadChildren: () => import('./pages/harvest-plan/harvest-plan.module').then( m => m.HarvestPlanPageModule)
  },
  /*{
    path: 'field-activity-admin',
    loadChildren: () => import('./pages/field-activity-admin/field-activity-admin.module').then( m => m.FieldActivityAdminPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'field-activity-create',
    loadChildren: () => import('./pages/field-activity-create/field-activity-create.module').then( m => m.FieldActivityCreatePageModule)
  },
  {
    path: 'field-activity-history',
    loadChildren: () => import('./pages/field-activity-history/field-activity-history.module').then( m => m.FieldActivityHistoryPageModule)
  },
  {
    path: 'field-activity-history/:record_id',
    loadChildren: () => import('./pages/field-activity-detail/field-activity-detail.module').then( m => m.FieldActivityDetailPageModule)
  },
  {
    path: 'field-activity-approval',
    loadChildren: () => import('./pages/field-activity-approval/field-activity-approval.module').then( m => m.FieldActivityApprovalPageModule)
  },
  {
    path: 'field-activity-approval/:record_id',
    loadChildren: () => import('./pages/field-activity-approval-detail/field-activity-approval-detail.module').then( m => m.FieldActivityApprovalDetailPageModule)
  },*/
  {
    path: 'tabs-admin',
    loadChildren: () => import('./pages/tabs-admin/tabs-admin.module').then( m => m.TabsAdminPageModule)
  },
  /*{
    path: 'field-activity-history-admin',
    loadChildren: () => import('./pages/field-activity-history-admin/field-activity-history-admin.module').then( m => m.FieldActivityHistoryAdminPageModule)
  },
  {
    path: 'field-activity-history-detail-admin',
    loadChildren: () => import('./pages/field-activity-history-detail-admin/field-activity-history-detail-admin.module').then( m => m.FieldActivityHistoryDetailAdminPageModule)
  },
  {
    path: 'areal-statement-maps',
    loadChildren: () => import('./pages/areal-statement-maps/areal-statement-maps.module').then( m => m.ArealStatementMapsPageModule)
  },
  {
    path: 'field-activity-harvest',
    loadChildren: () => import('./pages/field-activity-harvest/field-activity-harvest.module').then( m => m.FieldActivityHarvestPageModule)
  },
  /*
  {
    path: 'areal-statement/:block_id',
    loadChildren: () => import('./pages/areal-statement-detail/areal-statement-detail.module').then( m => m.ArealStatementDetailPageModule)
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
