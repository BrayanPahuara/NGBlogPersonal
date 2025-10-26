import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  public correoCopiado: boolean = false; 

  copiarCorreo() {
    const correo = "02hxbrayan@gmail.com";
    navigator.clipboard.writeText(correo).then(() => {
        this.correoCopiado = true;

        setTimeout(() => {
            this.correoCopiado = false;
        }, 3000);
        });
      }
}
