import { Route } from "@angular/router";
import { DogsComponent } from "@components/views/dogs/dogs.component";
import { HomeComponent } from "@components/views/home/home.component";

export const routes: Route[] = [

  {
    path: '',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'dogs',
    title: 'Dogs',
    component: DogsComponent
  }
]
