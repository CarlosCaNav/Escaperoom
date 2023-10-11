import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent {

  ngOnInit(): void { }

  resultado: string = ''; // su resultado

  pulsarBoton(boton: string) {
    if ( /* Number(this.resultado) <= 9999 */ this.resultado.length < 5 ){
  this.resultado += boton;  }
  }


  borrarTodo() {
    this.resultado = '';
  }

  verificar(){
    if (this.resultado == "74286"){
    window.alert("Erputoamo")}
    else if (this.resultado !== "74286"){
      window.alert("fallo")}
  }
}
