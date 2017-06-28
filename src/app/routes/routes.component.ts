import { Component, OnInit } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassTBComponent } from '../class-tb/class-tb.component';
import {HomeComponent } from '../home/home.component';
import { AjeComponent } from '../aje/aje.component'
import { ClientlistComponent } from '../clientlist/clientlist.component'
import {  ClientSelectComponent  } from '../client-select/client-select.component'

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'tbclassified', component: ClassTBComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aje', component: AjeComponent },
  { path: 'clients', component:  ClientlistComponent },
  { path: 'clientselect', component:  ClientSelectComponent  },

];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
