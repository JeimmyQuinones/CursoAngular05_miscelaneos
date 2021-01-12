import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
 export const APP_ROUTESUsuario:Routes=[
    {path:'nuevo',component:UsuarioNuevoComponent},
    {path:'detalle',component:UsuarioDetalleComponent},
    {path:'editar',component:UsuarioEditarComponent},
    {path:'**', pathMatch:'full', redirectTo:'nuevo' }
];
