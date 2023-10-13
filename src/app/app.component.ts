import { Component, HostListener, inject } from '@angular/core';
import {ComunicacionService} from '../app/comunicacion.service'; /* hay que incluir el servicio */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Escape_room';


  constructor(public comunicacionService: ComunicacionService) {} /* esto también es necesario para el servicio */

  ambiente = 1;
  ambientesl = 0;

  rotacion = 0;
  rotacionp = 0;
  posicion = 0;

  transformacion: any;
  altura: number = 240;
  fondo: number = 14;

  giro: number = 0; /* Esto es pa que la pelota mire en la misma dirección siempre */

  luz: number = 4; /* es el cuarto apagado */
  ftubos: number = 2; /* esto es para que el tubo desaparezca cuando saquen la bola */
  puntero: any = "";
  punteroX: number = 2;
  punteroY: any = 2;
  pizarra: any = "";
  pizarraX: any = "";
  pizarraY: any = "";
  linternaUV: any = 2; /* esto para saber si se ha cogido la linterna */
  uv: number = 0;
  zUV: number = 0;
  zPizarra: number = 0;
  hi: number = 0;
  codigo: boolean = false;
  salida: boolean = false; /* esto es si puedes salir de la habitacion o no */


  /*  pelota(){
    } */

  rotar(grados: number) {
    this.rotacion += grados;
    this.transformacion = "rotate(" + this.rotacion + "deg)";
    this.giro = this.rotacion * -1;


    if (this.posicion == 0 && this.rotacionp == 2) {
      this.altura = 10;
      this.posicion = 1;
    }


    if (this.posicion == 1 && this.rotacionp == 1) {
      this.fondo = 96;
      this.posicion = 2;
    }
    if (this.posicion == 1 && this.rotacionp == 0) {
      this.altura = 240;
      this.posicion = 0;
    }



    if (this.posicion == 2 && this.rotacionp == 0) {
      this.altura = 138;
      this.posicion = 3;
    }
    if (this.posicion == 2 && this.rotacionp == 3) {
      this.fondo = 14;
      this.posicion = 1;
    }



    if (this.posicion == 3 && this.rotacionp == 1) {
      this.fondo = 174;
      this.posicion = 4;
    }
    if (this.posicion == 3 && this.rotacionp == 2) {
      this.altura = 10;
      this.posicion = 2;
    }



    if (this.posicion == 4 && this.rotacionp == 0) {
      this.altura = 256;
      this.posicion = 5;
    }
    if (this.posicion == 4 && this.rotacionp == 3) {
      this.fondo = 96;
      this.posicion = 3;
    }



    if (this.posicion == 5 && this.rotacionp == 1) {
      this.fondo = 254;
      this.posicion = 6;
    }
    if (this.posicion == 5 && this.rotacionp == 2) {
      this.altura = 138;
      this.posicion = 4;
    }



    if (this.posicion == 6 && this.rotacionp == 2) {
      this.altura = -145;
      this.posicion = 7;
      setTimeout(() => {
        window.alert("aquí en la bola aparecerá una imagen con el número 4 mismo")
      }, 1000);
      setTimeout(() => {
        this.ftubos = 0;
      }, 3000);

    }
    if (this.posicion == 6 && this.rotacionp == 3) {
      this.fondo = 174;
      this.posicion = 5;
    }




    console.log("imagen en " + this.rotacion + "º");
    console.log("rotación " + this.rotacionp);
    console.log("posicion " + this.posicion);
    console.log("puntero " + this.punteroX);


  } /* hasta aquí las rotaciones */


  d() {
    this.rotacionp = this.rotacionp + 1;
    if (this.rotacionp == 4) {
      this.rotacionp = 0
    }
  }
  i() {
    this.rotacionp = this.rotacionp - 1;
    if (this.rotacionp == -1) {
      this.rotacionp = 3
    }
  }

  puerta() {
   window.alert("Todavía no puedes salir, debes introducir un código correcto");
   if (this.comunicacionService.estado == true){window.alert("enhorabuena! has conseguido salir"), console.log("furula el componente") }
  }
  teclas() {
    this.codigo = true;
  }

  cerrar(){
    this.codigo = false;
  }

  interruptor() {
    if (this.luz == 0 && this.linternaUV == 2){
      this.luz = 4;}
    else if (this.luz == 4 && this.linternaUV == 2){
      this.luz = 0;}
    else if (this.luz == 0 && this.linternaUV == 0){
      this.uv = 3;
      this.hi=5
      this.zUV=4;
    this.linternaUV = 0.1;
    this.zPizarra= 6;}
    else if (this.uv == 3 && this.linternaUV == 0.1){
      this.uv = 0;
      this.hi=0
      this.zUV=0;
      this.zPizarra= 0;}
      else if (this.uv == 0 && this.linternaUV == 0.1){
        this.uv = 3;
        this.zUV=4;
        this.hi=5;
        this.zPizarra= 6;
      }
  }

  linterna() {
    this.linternaUV = 0;
    this.ambiente = 0;
    this.ambientesl = 1;
  }

  abierto(){
    this.salida = true, console.log("furula")
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.punteroX = e.clientX;
    this.punteroY = e.clientY;
    this.pizarraX = e.clientX / 8;
    this.pizarraY = e.clientY / 6;
    this.puntero = "radial-gradient(circle at " + this.punteroX + "px " + this.punteroY + "px, transparent 50px, black 120px)";
    this.pizarra = "radial-gradient(circle at " + this.pizarraX + "px " + this.pizarraY + "px, rgba(50, 0, 255, 0.2) 5px, transparent 10px)";/* 
    console.log(e); */
  }


}

/* 
background: radial-gradient(circle at 200px 20px, transparent 100px, rgb(27, 27, 27) 240px); */