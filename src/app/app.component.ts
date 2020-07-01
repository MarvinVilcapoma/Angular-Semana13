import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angForm: FormGroup;
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private fb: FormBuilder){
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(0),Validators.maxLength(20)]],
      primerapellido:['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      segundoapellido:['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      digitosSSN:['',Validators.required,Validators.minLength(4),Validators.maxLength(4)],
      codigopostal:['',Validators.required],
      fechanacimiento:['',Validators.required],
      email: ['',[Validators.required, Validators.minLength(8),Validators.pattern(this.emailPattern)]],
      password: ['',Validators.required, Validators.pattern(this.emailPattern)],
      confirmpassword:['',Validators.required]
    });
  }
  onClickSubmit(nombre,primerapellido,segundoapellido,digitosSSN,codigopostal,fechanacimiento,email,password,confirmpassword){
    if(password != confirmpassword){
      alert('Las contraseñas no son iguales');
    }else{
      alert(' Nombre: '+ nombre+
          '\n Apellido paterno: '+ primerapellido +
          '\n Apellido materno: '+ segundoapellido +
          '\n Ultimos 4 dígitos SSN: '+ digitosSSN +
          '\n Código postal: '+ codigopostal +
          '\n Fecha de nacimiento: '+ fechanacimiento +
          '\n Correo electrónico: '+ email + 
          '\n Contraseña: '+ password);
    }
  }
  ngOnInit(){
  }

}
