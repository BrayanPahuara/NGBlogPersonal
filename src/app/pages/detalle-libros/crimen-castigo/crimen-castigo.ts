import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crimen-castigo',
  imports: [CommonModule],
  templateUrl: './crimen-castigo.html',
  styleUrl: './crimen-castigo.css'
})
export class CrimenCastigo {
  libro?: Libro;
  constructor(private librosService: LibrosService) {
    this.libro = this.librosService.getLibroById('crimen-castigo');
  }
}
