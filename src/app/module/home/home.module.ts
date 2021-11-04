import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DetailsComponent } from './page/details/details.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { HeaderModule } from 'src/app/core/header/header.module';
import { PrincipalComponent } from './page/principal/principal.component';

@NgModule({
  declarations: [
    DetailsComponent,
    PerfilComponent,
    PrincipalComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule
  ]
})
export class HomeModule { }
