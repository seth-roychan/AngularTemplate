import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedAngularMaterialModule } from './sharedangularmaterial/sharedangularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageslayoutComponent } from './pageslayout/pageslayout.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';
import { MapsComponent } from './maps/maps.component';
import { NavService } from './nav.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListItemComponent,
    DashboardComponent,
    PageslayoutComponent,
    FormsComponent,
    TableComponent,
    WidgetComponent,
    MapsComponent,
    TopNavComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
