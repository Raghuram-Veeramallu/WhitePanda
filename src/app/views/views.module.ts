import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { CompStoreComponent } from './comp-store/comp-store.component';

import { AvatarModule } from 'ngx-avatar';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    AvatarModule
  ],
  declarations: [
    FooterComponent,
    CompStoreComponent,

  ],
  exports: [
    FooterComponent,
    CompStoreComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
