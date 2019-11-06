import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAngularMaterialModule } from './sharedangularmaterial/sharedangularmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageslayoutComponent } from './pageslayout/pageslayout.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageslayoutComponent,
    FormsComponent,
    TableComponent,
    WidgetComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
