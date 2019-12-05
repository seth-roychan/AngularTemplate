import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageslayoutComponent } from './pageslayout/pageslayout.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';
import { MapsComponent } from './maps/maps.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';

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
  {path: 'maps', children: [
    {path: 'map1', component: MapsComponent},
    {path: 'map2', component: MapsComponent}
  ]},
  {path: 'table', component: TableComponent},
  {path: 'widget', component: WidgetComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
