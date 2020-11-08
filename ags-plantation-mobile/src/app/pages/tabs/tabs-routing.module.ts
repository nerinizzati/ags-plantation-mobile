import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'areal-statement',
        children: [
        { path: '', loadChildren: () => import('../areal-statement/areal-statement.module').then(m => m.ArealStatementPageModule)},
        { path: 'areal-statement-maps/:block_id', loadChildren: () => import('../areal-statement-maps/areal-statement-maps.module').then(m=>m.ArealStatementMapsPageModule)},
        { path: ':block_id', loadChildren: () => import('../areal-statement-detail/areal-statement-detail.module').then(m=>m.ArealStatementDetailPageModule)}
        ]
      },
      {
        path: 'field-activity',
        children: [
          { path: '', loadChildren: () => import('../field-activity/field-activity.module').then(m => m.FieldActivityPageModule)},
          { path: 'field-activity-create', loadChildren: () => import('../field-activity-create/field-activity-create.module').then(m => m.FieldActivityCreatePageModule)},
          { path: 'field-activity-history', loadChildren: () => import('../field-activity-history/field-activity-history.module').then( m => m.FieldActivityHistoryPageModule)},
          { path: 'field-activity-history/:record_id', loadChildren: () => import('../field-activity-detail/field-activity-detail.module').then( m => m.FieldActivityDetailPageModule)},
          { path: 'field-activity-harvest/:record_id', loadChildren: () => import('../field-activity-harvest/field-activity-harvest.module').then(m=>m.FieldActivityHarvestPageModule)}
        ]
      },
      {
        path: 'harvest-plan',
        loadChildren: () => import('../harvest-plan/harvest-plan.module').then(m => m.HarvestPlanPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/areal-statement',
        pathMatch: 'full'
      }
     
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/areal-statement',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
