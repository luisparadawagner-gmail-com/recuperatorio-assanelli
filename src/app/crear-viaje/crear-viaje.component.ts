import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

import { Pasajero } from 'src/app/Clase/Pasajero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent implements OnInit {

  pasajero : Pasajero;
  registro : any;

  constructor(
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  viajeForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    destino: [''],
    fechaViaje: ['']
  })

  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;

    if (Object.keys(this.registro).length) {
      this.pasajero = this.registro;
    }

    this.initForm(this.pasajero);
  }

  initForm(editarPasajero: Pasajero) {
    this.viajeForm = this.fb.group({
      nombre: [editarPasajero ? editarPasajero.nombre : ''],
      apellido: [editarPasajero ? editarPasajero.apellido : ''],
      edad: [editarPasajero ? editarPasajero.edad : ''],
      destino: [editarPasajero ? editarPasajero.destino : ''],
      fechaViaje: [editarPasajero ? editarPasajero.fechaViaje : ''],
    });
  }

  submit(){
    this.viajeForm.value;   
    this.pasajero = this.viajeForm.value;
    this.router.navigate(['/tabla-viaje-component', this.pasajero]);
  }

}
