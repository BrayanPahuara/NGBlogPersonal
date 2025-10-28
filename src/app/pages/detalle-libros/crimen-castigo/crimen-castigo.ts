import { Component,OnInit } from '@angular/core';
import { LibrosService } from '../../../services/libros';
import { Libro } from '../../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crimen-castigo',
  imports: [CommonModule],
  templateUrl: './crimen-castigo.html',
  styleUrl: './crimen-castigo.css'
})
export class CrimenCastigo implements OnInit{
  libro?: Libro;
  cargando: boolean = true;

  constructor(private librosService: LibrosService) {
    
  }

  async ngOnInit() {
      this.libro = await this.librosService.getLibroById('crimen-castigo');
      this.cargando = false;
  }
}
