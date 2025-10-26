import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgregarEmojiPipe } from '../../pipes/agregar-emoji-pipe';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,AgregarEmojiPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  public intereses = [
    { nombre: 'Desarrollo Web', destacado: false },
    { nombre: 'Leer libros', destacado: true },
    { nombre: 'Hacer deporte', destacado: true },
    { nombre: 'Jugar ajedrez', destacado: false },
    { nombre: 'Aprender sobre tecnologías', destacado: true },
    { nombre: 'Ver peliculas', destacado: true },
    { nombre: 'Escuchar musica', destacado: true },
    { nombre: 'Jugar videojuegos', destacado: false}
  ]

}
