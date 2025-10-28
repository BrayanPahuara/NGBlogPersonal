import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rebelion-granja',
  imports: [CommonModule],
  templateUrl: './rebelion-granja.html',
  styleUrl: './rebelion-granja.css'
})
export class RebelionGranja implements OnInit{
  libro?: Libro;
  cargando: boolean = true;

  constructor(private librosService: LibrosService) {
    
  }

  async ngOnInit() {
      this.libro = await this.librosService.getLibroById('rebelion-granja');
      this.cargando = false;
  }
}
