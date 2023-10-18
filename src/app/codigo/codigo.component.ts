import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service'; /* hay que incluir el servicio */

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent {

  constructor(public comunicacionService: ComunicacionService) { } /* esto también es necesario para el servicio */

  ngOnInit(): void { }

  resultado: string = ''; // su resultado
  estado: boolean = false; /* si la puerta esta abierta o cerrada */

  pulsarBoton(boton: string) {
    const audio = new Audio('assets/pon.ogg');
    audio.play();
    if ( /* Number(this.resultado) <= 99 */ this.resultado.length < 3) {
      this.resultado += boton;
    }
  }


  borrarTodo() {
    const audio = new Audio('assets/pon.ogg');
    audio.play();
    this.resultado = '';
  }

  verificar() {
    if (this.resultado == "748") {
      window.alert("Erputoamo"), this.estado = true, console.log("furula el código"), this.comunicacionService.aniadir()
    }
    else if (this.resultado !== "748") {
      this.resultado = '';
    const audio = new Audio('assets/fallo.ogg');
    audio.play();
    }
  }
}
