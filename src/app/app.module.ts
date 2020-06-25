import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items/list-items.component';
import { FormsModule } from '@angular/forms';
@NgModule({
declarations: [
    AppComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
