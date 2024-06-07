import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NourritureListComponent } from './nourriture-container/nourriture-list/nourriture-list.component';
import { NourritureDetailsComponent } from './nourriture-container/nourriture-details/nourriture-details.component';
import { NourritureContainerComponent } from './nourriture-container/nourriture-container.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NourritureListComponent,
    NourritureDetailsComponent,
    NourritureContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
