import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { AboutModule } from './about/about.module';
import { MyProjectsModule } from './my-projects/my-projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    AboutModule,
    MyProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
