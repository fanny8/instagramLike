import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FollowingComponent } from './components/following/following.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CanActivateGuard } from './auth/route-gard';


const routes: Routes = [
  {path:'Home',component:HomeComponent,},
  {path:'allposts',component:AllPostsComponent, canActivate: [CanActivateGuard]},
  {path:'following',component:FollowingComponent,canActivate: [CanActivateGuard]},
  {path:'favorites',component:FavoritesComponent, canActivate: [CanActivateGuard]},
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'myposts',component:MyPostsComponent, canActivate: [CanActivateGuard]},
  {path:'signup',component:SignUpComponent},
  // {path:'',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
