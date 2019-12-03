import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageslayoutComponent } from './pageslayout/pageslayout.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pageslayout', component: PageslayoutComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'table', component: TableComponent},
  {path: 'widget', component: WidgetComponent},
  {path: 'maps', component: MapsComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
