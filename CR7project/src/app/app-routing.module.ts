import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TravelComponent } from './travel/travel.component';
const routes: Routes = [
  {
  path: "", component:HomeComponent
  },
  {
  path:"blog", component:BlogComponent
  },
  {
  path:"travel", component:TravelComponent
  },
  {
  path:"destinations", component:DestinationsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
