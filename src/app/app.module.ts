import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './Components/ng-style/ng-style.component';
import { ClasesComponent } from './Components/clases/clases.component';
import { ResaltadoDirective } from './Directives/resaltado.directive';
import { HomeComponent } from './Components/home/home.component';

import{App_routing} from './app.routes';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './Components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './Components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './Components/usuario/usuario-detalle.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClasesComponent,
    ResaltadoDirective,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    App_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
