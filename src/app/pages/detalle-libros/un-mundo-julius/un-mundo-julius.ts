import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-un-mundo-julius',
  imports: [CommonModule],
  templateUrl: './un-mundo-julius.html',
  styleUrl: './un-mundo-julius.css'
})
export class UnMundoJulius implements OnInit{
  libro?: Libro;
  cargando: boolean = true;

  constructor(private librosService: LibrosService) {
  }
  
  async ngOnInit() {
      this.libro = await this.librosService.getLibroById('un-mundo-julius');
      this.cargando = false;
  }
}
