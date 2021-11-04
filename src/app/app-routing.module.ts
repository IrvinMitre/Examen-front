import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
      {
        path: '',
        loadChildren: () =>
          import('./module/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./module/auth/auth-routing.module').then(
            (m) => m.AuthRoutingModule
          ),
      }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
