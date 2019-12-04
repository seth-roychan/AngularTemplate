import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageslayoutComponent } from './pageslayout/pageslayout.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'dashboards', children: [
    {path: 'dashboard1', component: DashboardComponent},
    {path: 'dashboard2', component: DashboardComponent}
  ]},
  {path: 'pages', children: [
    {path: 'pageslayout1', component: PageslayoutComponent},
    {path: 'pageslayout2', component: PageslayoutComponent}
  ]},
  {path: 'forms', children: [
    {path: 'forms1', component: FormsComponent},
    {path: 'forms2', component: FormsComponent}
  ]},
  {path: 'table', component: TableComponent},
  {path: 'widget', component: WidgetComponent},
  {path: 'maps', component: MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
