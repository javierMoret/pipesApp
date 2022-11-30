import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = 'javier';
  nombreUpper: string = 'JAVIER';
  nombreCompleto: string = 'jaVieR moreT';

  fecha: Date = new Date();

}
