import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-inicio',
  imports: [About,Skills],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
