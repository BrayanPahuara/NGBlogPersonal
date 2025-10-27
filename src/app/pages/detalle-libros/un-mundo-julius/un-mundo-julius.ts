import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-un-mundo-julius',
  imports: [CommonModule],
  templateUrl: './un-mundo-julius.html',
  styleUrl: './un-mundo-julius.css'
})
export class UnMundoJulius {
  libro?: Libro;
  constructor(private librosService: LibrosService) {
    this.libro = this.librosService.getLibroById('un-mundo-julius');
  }
}
