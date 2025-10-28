import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros';
import { Libro } from '../../services/libros';
import { CommonModule } from '@angular/common';
import { LibroCard } from '../../components/libro-card/libro-card';


@Component({
  
  imports: [CommonModule, LibroCard],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})

export class Libros implements OnInit{
  misLibros: Libro[] = [];
  tituloSeleccionado: string | null = null;
  cargando: boolean = true;

  constructor(private librosService: LibrosService){
  }

  async ngOnInit() {
      console.log('Iniciando carga de libros...');
      this.misLibros = await this.librosService.getLibros();
      this.cargando = false;
      console.log('Libros cargados:', this.misLibros);
  }
  async manejarSeleccion(idLibro: string){
    const libroEncontrado = await this.librosService.getLibroById(idLibro);
    this.tituloSeleccionado = libroEncontrado ? libroEncontrado.titulo : null;
  }
}
