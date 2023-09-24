import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { OrderComponent } from './features/order/components/order.component';
import { authGuard } from './core/guards/auth.guard';
import { AdminChatPageComponent } from './admin-pages/admin-chat-page/admin-chat-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'admin', loadChildren: () => import('./admin-pages/admin-home-page/admin-home-page.module').then(m => m.AdminHomePageModule) },
  { path: 'chat', component: ChatComponent, canActivate: [authGuard] },
  {path: 'order',component: OrderComponent},
  {path: 'admin-chat', component: AdminChatPageComponent},
  {path: 'thanks', loadChildren: () => import('./pages/thanks-page/thanks-page.module').then(m => m.ThanksPageModule)},
  {path: 'new-releases', loadChildren: () => import('./pages/new-releases-page/new-releases-page.module').then(m => m.NewReleasesPageModule)},
  {path: 'upcoming', loadChildren: () => import('./pages/upcoming-page/upcoming-page.module').then(m => m.UpcomingPageModule)},
  {path: 'film-detail', loadChildren: () => import('./pages/film-detail-page/film-detail-page.module').then(m => m.FilmDetailPageModule)},
  {path: 'shopping', loadChildren: () => import('./pages/shopping-page/shopping-page.module').then(m => m.ShoppingPageModule)},
  {path: 'movie', loadChildren: () => import('./admin-pages/admin-movie-edit-page/admin-movie-edit-page.component').then(m => m.AdminMovieEditPageComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
