import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotebookComponent } from './quotebook/quotebook.component';
import { DateCountPipe } from './date-count.pipe';
import { QouteFormComponent } from './qoute-form/qoute-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotebookComponent,
    DateCountPipe,
    QouteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
