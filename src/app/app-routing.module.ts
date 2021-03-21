import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'projects',
    component: MyProjectsComponent,
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
