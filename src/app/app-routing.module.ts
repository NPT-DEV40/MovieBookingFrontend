import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { OrderComponent } from './features/order/components/order.component';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'admin', loadChildren: () => import('./admin-pages/admin-home-page/admin-home-page.module').then(m => m.AdminHomePageModule) },
  { path: 'chat', component: ChatComponent, canActivate: [authGuard] },
  {path: 'order',component: OrderComponent},
  {path: 'thanks', loadChildren: () => import('./pages/thanks-page/thanks-page.module').then(m => m.ThanksPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
