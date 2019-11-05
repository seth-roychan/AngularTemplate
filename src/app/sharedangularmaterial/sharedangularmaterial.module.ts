import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
    ],
    exports: [
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
    ]
  })
export class SharedAngularMaterialModule { }
