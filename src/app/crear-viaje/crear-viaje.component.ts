import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  viajeForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    destino: [''],
    fechaViaje: ['']
  })

  ngOnInit(): void {
  }

  submit(){
    this.viajeForm.value;   
  }

}
