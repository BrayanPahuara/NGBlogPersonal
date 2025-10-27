import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rebelion-granja',
  imports: [CommonModule],
  templateUrl: './rebelion-granja.html',
  styleUrl: './rebelion-granja.css'
})
export class RebelionGranja {
  libro?: Libro;
  constructor(private librosService: LibrosService) {
    this.libro = this.librosService.getLibroById('rebelion-granja');
  }
}
