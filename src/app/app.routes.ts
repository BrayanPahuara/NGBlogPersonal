import { Routes } from '@angular/router';
import {Inicio} from './pages/inicio/inicio';
import {Lugares} from './pages/lugares/lugares';
import {Contacto} from './pages/contacto/contacto';
import{Libros} from './pages/libros/libros';

import { LibroDetalle } from './pages/libro-detalle/libro-detalle';



export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'lugares', component: Lugares},
    {path: 'contacto', component: Contacto},
    {path: 'libros', component: Libros},
    {path: 'libros/:id', component: LibroDetalle},
    {path: '**', redirectTo: ''}
];


