//Danielle Taplin
//app.routing.ts
//11/4/23
//secure profile app

//import routes and components
import { Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SigninComponent } from "./sign-in/sign-in.component";
import { SignInGuard } from "./sign-in.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
