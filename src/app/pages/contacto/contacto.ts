import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  copiarCorreo() {
    const correo = "02hxbrayan@gmail.com";
    navigator.clipboard.writeText(correo).then(() => {
        alert("Correo copiado: " + correo);
        });
      }
}
