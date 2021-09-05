import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
   { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
   { path: 'settings', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
