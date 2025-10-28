import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Libro } from '../../services/libros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro-card',
  imports: [CommonModule],
  templateUrl: './libro-card.html',
  styleUrl: './libro-card.css'
})

export class LibroCard {
@Input() libro!: Libro;

@Output() libroSeleccionado = new EventEmitter<string>();

seleccionarLibro() {
    this.libroSeleccionado.emit(this.libro.id);
  }
}
