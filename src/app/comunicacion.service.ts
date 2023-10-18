import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor() { }

  estado: boolean = false;


  aniadir(){
    this.estado = true;
    console.log("furula el servicio");
  };
}
