import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})

export class Contacto {

  public correoCopiado: boolean = false; 

  public urlGithub: string = "https://github.com/BrayanPahuara";

  public asunto: string = "";

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
