import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarMenuComponent } from './var-menu/var-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaximizeDirective } from './directives/maximize.directive';
import { KingdomComponent } from './kingdom/kingdom.component';

@NgModule({
  declarations: [
    AppComponent,
    VarMenuComponent,
    MaximizeDirective,
    KingdomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
