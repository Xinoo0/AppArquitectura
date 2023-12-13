import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/registro-service/registro.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router,private Registro: RegistroService) {

    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

    register() {
    const nombre = this.registroForm.get('nombre')?.value;
    const apellido = this.registroForm.get('apellido')?.value;
    const telefono = this.registroForm.get('telefono')?.value;
    const email = this.registroForm.get('email')?.value;
    const password = this.registroForm.get('password')?.value;

    this.Registro.register(nombre, apellido, telefono, email, password);
    this.router.navigate([''])
    // Puedes agregar una lógica adicional después del registro si es necesario
    } 

    
    ngOnInit() {
    }

} 
