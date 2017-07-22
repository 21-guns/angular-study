/**
 * Created by loopsun on 2017/7/20.
 */
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from  '@angular/router'

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path: "heroes", component: HeroListComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "detail/:id", component: HeroDetailComponent},
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
