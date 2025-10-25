import { Routes } from '@angular/router';
import {Inicio} from './pages/inicio/inicio';
import {Lugares} from './pages/lugares/lugares';
import {Contacto} from './pages/contacto/contacto';
import{Libros} from './pages/libros/libros';
import {NochesBlancas} from './pages/detalle-libros/noches-blancas/noches-blancas';
import {ElExtranjero} from './pages/detalle-libros/el-extranjero/el-extranjero';
import {UnMundoFeliz} from './pages/detalle-libros/un-mundo-feliz/un-mundo-feliz';
import {UnMundoJulius} from './pages/detalle-libros/un-mundo-julius/un-mundo-julius';
import {CrimenCastigo} from './pages/detalle-libros/crimen-castigo/crimen-castigo';
import { RebelionGranja } from './pages/detalle-libros/rebelion-granja/rebelion-granja';



export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'lugares', component: Lugares},
    {path: 'contacto', component: Contacto},
    {path: 'libros', component: Libros},
    {path: 'libros/noches-blancas', component: NochesBlancas},
    {path: 'libros/el-extranjero', component: ElExtranjero},
    {path: 'libros/un-mundo-feliz', component: UnMundoFeliz},
    {path: 'libros/un-mundo-julius', component: UnMundoJulius},
    {path: 'libros/crimen-castigo', component: CrimenCastigo},
    {path: 'libros/rebelion-granja', component: RebelionGranja},
    {path: '**', redirectTo: ''}
];


