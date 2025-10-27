import { Component } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-el-extranjero',
  imports: [CommonModule],
  templateUrl: './el-extranjero.html',
  styleUrl: './el-extranjero.css'
})
export class ElExtranjero {
  libro?: Libro;
  constructor(private librosService: LibrosService) {
    this.libro = this.librosService.getLibroById('el-extranjero');
  }
}
