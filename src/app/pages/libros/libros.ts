import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros';
import { Libro } from '../../services/libros';
import { CommonModule } from '@angular/common';
import { LibroCard } from '../../components/libro-card/libro-card';


@Component({
  
  imports: [CommonModule, LibroCard],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})
export class Libros {
  misLibros: Libro[] = [];
  public tituloSeleccionado: string | null = null;
  constructor(private librosService: LibrosService){
    this.misLibros = this.librosService.getLibros();
  }
  manejarSeleccion(idLibro: string){
    const libroEncontrado = this.librosService.getLibroById(idLibro);
    this.tituloSeleccionado = libroEncontrado ? libroEncontrado.titulo : null;
  }
}
