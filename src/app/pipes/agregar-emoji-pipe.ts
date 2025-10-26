import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agregarEmoji'
})
export class AgregarEmojiPipe implements PipeTransform {

  transform(value: string): string {
switch (value) {
      case 'Desarrollo Web':
        return '💻 ' + value;
      case 'Leer libros':
        return '📚 ' + value;
      case 'Hacer deporte':
        return '⚽ ' + value;
      case 'Jugar ajedrez':
        return '♟️ ' + value;
      case 'Aprender sobre tecnologías':
        return '💡 ' + value;
      case 'Ver peliculas':
        return '🎬 ' + value;
      case 'Escuchar musica':
        return '🎧 ' + value;
      case 'Jugar videojuegos':
        return '🎮 ' + value;
      default:
        return value;
  }
}
}
