import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseABalloonComponent } from './choose-aballoon/choose-aballoon.component';
import { BalloonComponentComponent } from './balloon-component/balloon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseABalloonComponent,
    BalloonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
