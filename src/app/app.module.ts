import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonDirective } from './back-button.directive';
import { GitIssuesModule } from './git-issues/git-issues.module';
import { MainPageModule } from './main-page/main-page.module';
import { MyProjectsModule } from './my-projects/my-projects.module';
import { NavServiceService } from './nav-service.service';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, BackButtonDirective, Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    AboutModule,
    MyProjectsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    GitIssuesModule,
  ],
  providers: [NavServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
