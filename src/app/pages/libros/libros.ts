import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros';
import { Libro } from '../../services/libros';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-libros',
  imports: [CommonModule],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})
export class Libros {
  misLibros: Libro[] = [];
  constructor(private librosService: LibrosService){
    this.misLibros = this.librosService.getLibros();
  }
}
