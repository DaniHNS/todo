import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './features/list-items/list-items.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
@NgModule({
declarations: [
    AppComponent,
    ListItemsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
