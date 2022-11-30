import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-no-comunes',
    templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

    nombre: string = 'Javier';
    genero: string = 'masculino';

    invitacionMap = {
        'masculino': 'invitarlo',
        'femenino': 'invitarla'
    }


    clientes: string[] = ['Maria', 'Pedro', 'Miguel', 'Isabel', 'Javier', 'Rafael'];
    clientesMap = {
        '=0': 'no tenemos ningún cliente esperando.',
        '=1': 'tenemos un cliente esperado.',
        'other': 'tenemos # clientes esperando.'

    }

    cambiarPersona() {
        if (this.nombre === 'Javier') {
            this.nombre = 'Sara';
            this.genero = 'femenino'
        } else {
            this.nombre = 'Javier';
            this.genero = 'masculino'
        }
    }

    borrarCliente() {
        this.clientes.pop();
    }


    persona = {
        nombre: 'Javier',
        edad: 19,
        direccion: 'Malaga, Spain'
    }

    heroes = [
        {
            nombre: 'Superman',
            vuela: true,
        },
        {
            nombre: 'Robin',
            vuela: false,
        },
        {
            nombre: 'Spiderman',
            vuela: false
        }
    ]


    // Async Pipe

    miObservable = interval(1000);
    
    valorPromesa = new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            resolve('Tenemos data de promesa')
        }, 3500);
    });


}
