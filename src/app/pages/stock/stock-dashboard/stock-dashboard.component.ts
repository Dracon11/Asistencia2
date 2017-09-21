import { ServiceStockService } from '../../../services/service-stock.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { User } from '../../../models/user';

import { FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockDashboardComponent implements OnInit {

  title = 'Asistencia';
  subtitle = 'Lista de Usuarios';
  subtitle2 = 'Tipos de usuarios';

  public form: FormGroup;
  public post: any;
  public name: string;
  public lastname: string;
  public dni: string;
  public date: Date;
  public user: string;
  public password: string;
  public type_user: number | string | any;

  typeUsers = [];
  users = [];
  status = false;

  value = '';
  onEnter(value: string) { this.value = value; }

  constructor(private userService: ServiceStockService, fb: FormBuilder  ) {
    this.form = fb.group({
        'name': ['', Validators.compose([Validators.required, Validators.minLength[3], Validators.maxLength[50] ] )],
        'lastname': ['', Validators.compose([ Validators.required , Validators.minLength[4], Validators.maxLength[50] ] )],
        'dni': ['', Validators.compose([ Validators.required , Validators.minLength[8], Validators.maxLength[8] ] )],
        'date': ['', [ Validators.required]],
        'user': ['', Validators.compose([ Validators.required , Validators.minLength[5], Validators.maxLength[50] ] )],
        'password': ['', Validators.compose([ Validators.required , Validators.minLength[5], Validators.maxLength[50] ] )],
        'type_user': ['', [ Validators.required ]]
    });
  }

  ngOnInit() {
    this.getTypeUsers();
    this.getUsers();
  }

/// TIPO USUARIO

getTypeUsers(): void {
    this.userService.getTypeUsers().subscribe(
      res => {
        const arrData = JSON.stringify(res.tipousuario);

        if ( res.status === 'ok' ) {
          this.status = true;
          console.log('tipo Usuarios cargados');
          this.typeUsers = JSON.parse( arrData );
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
      this.userService.createTypeUser(result_json).subscribe(
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
            console.log('tipo usuario eliminado');
            this.getTypeUsers();

          }
        },
        err => {
          console.log('error no se pudo eliminar', err);
        }
      );
    }
   }

///   USER

getUsers(): void {
          this.userService.getUsers().subscribe(
            res => {
              const arr = JSON.stringify(res.usuario);

              if ( res.status === 'ok' ) {
                this.status = true;
                console.log('usuarios cargados')
                this.users = JSON.parse( arr );

              } else if (res.status === 'error') {
                console.log('error de servicios', res );
              }
            }  ,
            err => {
              console.log('error get usuario', err);
            }
          );
}

   addUser(post): void {

    const json = { nombres: post.name , apellidos: post.lastname , dni: post.dni ,
       fecha_nacimiento: post.date, usuario: post.user , password: post.password,
        tipousuario_id: parseInt( post.type_user, 10 ) };

     this.userService.createUser(json).subscribe(
      res => {
        if (res.statusText === 'OK') {
          console.log('usuario agregado', res);
          this.getUsers();

        } else if (res.status === 'error') {
          console.log('error de servicios', res );
        }
      },
      err => {
        console.log('error al agregar usuario', err) ;
        this.getUsers();
      }
     );
   }

   updateUser(post) {
    const json = { nombres: post.name , apellidos: post.lastname , dni: post.dni ,
      fecha_nacimiento: post.date, usuario: post.user , password: post.password,
       tipousuario_id: parseInt( post.type_user, 10) };

      this.userService.putUser(post).subscribe(
        res => {
            if (res.statusText === 'ok' ) {
              console.log('usuario actualizado');
              this.getUsers();
            } else if (res.status === 'error' ) {
              console.log('error del servidor');
              this.getUsers();
            }
        },
        err => {
          console.log('No se puede actualizar el usuario');
        }
      );
   }

   deleteUser(dni: string): void {
    console.log(dni);
    console.log(typeof(dni));

    const answer = confirm('Estas seguro de querer eliminarlo ');
    if (answer) {
      this.userService.deleteUser(dni).subscribe(
        res => {
          if (res.statusText === 'OK') {
            console.log('usuario eliminado');
            this.getUsers();

          } else {
            alert(res.status_msg);
          }
        },
        err => {
          console.log('error no se pudo eliminar', err);
        }
      );
    }
   }

}
