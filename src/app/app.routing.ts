import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes Creados
import { InicioComponent } from './components/home.component';

//Array de rutas
const appRoutes: Routes=[
    {path: '', component:InicioComponent},
    {path: 'home',component:InicioComponent}
]
//Exportar las variables de las rutas
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);