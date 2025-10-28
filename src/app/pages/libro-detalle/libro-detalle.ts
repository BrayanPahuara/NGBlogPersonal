import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros';
import { Libro } from '../../services/libros';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css'
})

export class LibroDetalle implements OnInit {
  libro?: Libro;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID del libro obtenido de la ruta:', id);
    if (id) {
      this.libro = await this.librosService.getLibroById(id);
    } else {
      console.error('No se encontro ID en la ruta');
    }
    this.cargando = false;
}
}