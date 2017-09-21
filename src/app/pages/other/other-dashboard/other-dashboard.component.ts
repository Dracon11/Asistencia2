import { ServiceStockService } from './../../../services/service-stock.service';
import { Component, ViewEncapsulation , OnInit } from '@angular/core';

import { FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-other-dashboard',
  templateUrl: './other-dashboard.component.html',
  styleUrls: ['./other-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OtherDashboardComponent implements OnInit  {
  title = 'Asistencia';
  subtitle = 'Tipos de Usuarios';
  typeUser = [];
  status = false;
  tipo;

  constructor(private userService: ServiceStockService) {

  }
  ngOnInit() {
    this.getTypeUsers();
  }

 /// TIPO USUARIO
 getTypeUsers(): void {
  this.userService.getTypeUsers().subscribe(
    res => {
      const arrData = JSON.stringify(res.tipousuario);

      if ( res.status === 'ok' ) {
        this.status = true;
        console.log('tipo Usuarios cargados');
        this.typeUser = JSON.parse( arrData );
          // console.log( 'user : ' + i + ' id: ' + this.typeUsers[i].id );
      } else if (res.status === 'error') {

          console.log('error de servicios');
      }
    },
    err => {
      console.log('error get tipo usuarios');
    }
  );
 }

 addTypeUser(data: any) {
    // console.log(JSON.stringify(result_json));

    if (!data) { return console.log('escribe un texto') ; }
    const result_json = { tipo_usuario : data };
    this.userService.createTypeUser(data).subscribe(
      res =>  {
        if (res.statusText === 'OK') {
          console.log('tipo usuario agregado', res);
          this.getTypeUsers();
        }

      },
      err => {
          console.log('error al agregar tipo usuario', err);
      }
    ) ;
 }

 updateTypeUser(id) {

  this.userService.putTypeUser(id).subscribe(
    res => {
      if (res.statusText === 'OK') {
        console.log('tipode usuario editado');
        this.getTypeUsers();
      } else if (res.status === 'error') {
        console.log('error de servidor', res);

      }
    },
    err => {
      console.log('error al actualizar el tio de usuario', err);
    }
  );
 }

 deleteTypeUser(id): void {
  const answer = confirm('Estas seguro de querer eliminarlo' );

  if (answer) {
    this.userService.deleteTypeUser(id).subscribe(
      res => {
        if (res.statusText === 'OK') {
          console.log('eliminado');
          this.getTypeUsers();

        }
      },
      err => {
        console.log('error no se pudo eliminar', err);
      }
    );
  }
 }

}
