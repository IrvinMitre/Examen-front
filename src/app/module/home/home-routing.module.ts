import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './page/details/details.component';
import { PerfilComponent } from './page/perfil/perfil.component';

import { PrincipalComponent } from './page/principal/principal.component';
const routes: Routes =  [
      {
        path: '', component: PrincipalComponent
      },
      {
        path: 'details', component: DetailsComponent
      },
      {
        path: 'perfil', component: PerfilComponent
      }
    ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
