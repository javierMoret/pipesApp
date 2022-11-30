import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipesApp';

  nombre:string = 'Javi';

  mostrarNombre(){
    console.log(this.nombre)
  }

  constructor(private primeNgConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primeNgConfig.ripple = true;
  }
}
