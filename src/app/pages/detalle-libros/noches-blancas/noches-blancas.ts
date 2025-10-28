import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noches-blancas',
  imports: [CommonModule],
  templateUrl: './noches-blancas.html',
  styleUrl: './noches-blancas.css'
})
export class NochesBlancas implements OnInit{
  libro?: Libro;
  cargando: boolean = true;

  constructor(private librosService: LibrosService) {
    
  }

  async ngOnInit() {
      this.libro = await this.librosService.getLibroById('noches-blancas');
      this.cargando = false;
  }
}
