import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-el-extranjero',
  imports: [CommonModule],
  templateUrl: './el-extranjero.html',
  styleUrl: './el-extranjero.css'
})
export class ElExtranjero implements OnInit{
  libro?: Libro;
  cargando: boolean = true;

  constructor(private librosService: LibrosService) {
    
  }

  async ngOnInit() {
      this.libro = await this.librosService.getLibroById('el-extranjero');
      this.cargando = false;
  }
}
