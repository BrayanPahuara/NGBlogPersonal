import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noches-blancas',
  imports: [CommonModule],
  templateUrl: './noches-blancas.html',
  styleUrl: './noches-blancas.css'
})
export class NochesBlancas {
  libro?: Libro;
  constructor(private librosService: LibrosService) {
    this.libro = this.librosService.getLibroById('noches-blancas');
  }
}
