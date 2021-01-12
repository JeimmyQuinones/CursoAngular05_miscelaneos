import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import {APP_ROUTESUsuario} from './Components/usuario/usuario.routes';

const APP_ROUTES:Routes=[
    {path:'home', component:HomeComponent },
    {
        path:'usuario/:id', 
        component:UsuarioComponent,
        children:APP_ROUTESUsuario
    },
    {path:'**', pathMatch:'full', redirectTo:'home' }
];

export const App_routing = RouterModule.forRoot(APP_ROUTES);