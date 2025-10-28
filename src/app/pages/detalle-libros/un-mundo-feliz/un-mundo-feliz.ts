import { Component,OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-un-mundo-feliz',
  imports: [CommonModule],
  templateUrl: './un-mundo-feliz.html',
  styleUrl: './un-mundo-feliz.css'
})
export class UnMundoFeliz implements OnInit {
  libro?: Libro;
  cargando: boolean = true;

  constructor(private librosService: LibrosService) {
    
  }

  async ngOnInit() {
      this.libro = await this.librosService.getLibroById('un-mundo-feliz');
      this.cargando = false;
  }
}
