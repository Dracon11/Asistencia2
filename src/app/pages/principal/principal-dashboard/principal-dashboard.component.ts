import { ServiceStockService } from './../../../services/service-stock.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-dashboard',
  templateUrl: './principal-dashboard.component.html',
  styleUrls: ['./principal-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalDashboardComponent implements OnInit  {

  title = 'Asistencia';
  subtitle = 'Asistencia';
  assistences = [];
  users = [];
  status = false;
  public form: FormGroup;
  public post: any;

  constructor(private userService: ServiceStockService, fb: FormBuilder ) {
    this.form = fb.group({
      'user': [null, [ Validators.required ]],
      'hour': [null , [ Validators.nullValidator ] ]
    });

  }

  ngOnInit() {
    this.getAssistence();
    this.getUsers();
    this.getMoment();
  }


  getMoment(): void {

  const day = new Date
  const hour = day.getHours()
  const minute = day.getMinutes()
  const second = day.getSeconds()
  const hourNow = hour + ':' + minute + ':' + second;


    (<HTMLInputElement>document.getElementById('hour')).innerHTML = hourNow;

  // setTimeout('getMoment()' , 1000);

  }

  getAssistence() {

    this.userService.getAssistence().subscribe(
         res => {
             const arr = JSON.stringify(res.asistencia);

                if  ( res.status === 'ok' ) {
                  this.status = true;
                  this.assistences = JSON.parse( arr );
                }
             },
        err => {
          console.log('error de get asistencia', err);

        }
    );
  }

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

addAssistence(post): void {
 const json = { nombres: parseInt(post.id, 10) , hora_entrada: post.hour };

  this.userService.createAssistence(json).subscribe(
   res => {
     if (res.statusText === 'OK') {
       console.log('usuario agregado', res);
      this.getAssistence();

     } else if (res.status === 'error') {
       console.log('error de servicios', res );
     }
   },
   err => {
     console.log('error al agregar usuario', err) ;
     this.getAssistence();
   }
  );
}

updateAssistence(post): void {
  const json = { nombres: parseInt(post.user, 10) , hora_salida: post.exit};

  this.userService.putAssistence(json).subscribe(
   res => {
     if (res.statusText === 'OK') {
       console.log('usuario agregado', res);
       this.getAssistence();

     } else if (res.status === 'error') {
       console.log('error de servicios', res );
     }
   },
   err => {
     console.log('error al agregar usuario', err) ;
     this.getAssistence();
   }
  );
}

deleteAssistence(id): void {
const answer = confirm('Estas seguro que quieres elimnarlo');
if (answer) {
  this.userService.deleteAssistence(id).subscribe(
    res => {
      if (res.statusText === 'OK') {
        console.log('usuario agregado', res);
        this.getAssistence();

      } else if (res.status === 'error') {
        console.log('error de servicios', res );
      }
    },
    err => {
      console.log('error al agregar usuario', err) ;
      this.getAssistence();
    }
   );
  }

}

}
