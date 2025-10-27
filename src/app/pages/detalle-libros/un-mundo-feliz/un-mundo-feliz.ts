import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-un-mundo-feliz',
  imports: [CommonModule],
  templateUrl: './un-mundo-feliz.html',
  styleUrl: './un-mundo-feliz.css'
})
export class UnMundoFeliz {
  libro?: Libro;
  constructor(private librosService: LibrosService) {
    this.libro = this.librosService.getLibroById('un-mundo-feliz');
  }
}
