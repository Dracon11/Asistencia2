import { Injectable, Input , Output, EventEmitter } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceStockService {

  constructor(private http: Http) { }

  getTypeUsers(): Observable<any> {
    return this.http.get('http://192.168.1.9:8000/api/rest/tipousuario')
            .map( (res: Response) => res.json() )
            .catch( this.handleError);
  }

  getUsers() {
    return this.http.get('http://192.168.1.9:8000/api/rest/usuarios')
            .map((res: Response) => res.json() )
            .catch( this.handleError);
  }

  getAssistence() {
    return this.http.get('http://192.168.1.9:8000/api/rest/asistencia')
    .map((res: Response) => res.json() )
    .catch(this.handleError );
  }

  createTypeUser(data: any ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin' : '*' });
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://192.168.1.9:8000/api/rest/tipousuario', data , options)
      .map((res: Response) => res )
      .catch(this.handleError);
  }

  createUser(data: any ): Observable<any> {
    const headers = new Headers({ 'Content-Type' : 'application/json' });
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://192.168.1.9:8000/api/rest/usuarios', data , options)
              .map( (res: Response) => res )
              .catch(this.handleError);
  }

  createAssistence(data: any ): Observable<any> {
    const headers = new Headers({ 'Content-Type' : 'application/json' });
    const options = new RequestOptions({ headers: headers});

    return this.http.post('http://192.168.1.9:8000/api/rest/asistencia', data , options)
              .map( (res: Response) => res )
              .catch(this.handleError);
  }

  putTypeUser(data: any): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*' });
    const options = new RequestOptions({ headers: headers});

    return this.http.put('http://192.168.1.9:8000/api/rest/tipousuario', data, options)
            .map( (res: Response) => res.json() )
            .catch( (error: any) => Observable.throw(error.json().error || 'Server '));
  }

  putUser(data: any): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.put('http://192.168.1.9:8000/api/rest/usuarios', data, options)
            .map( (res: Response) => res.json() )
            .catch( (error: any) => Observable.throw(error.json().error || 'Server '));
  }

  putAssistence(data: any): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.put('http://192.168.1.9:8000/api/rest/asistencia', data, options)
            .map( (res: Response) => res )
            .catch( (error: any) => Observable.throw(error.json().error || 'Server '));
  }

  deleteTypeUser(id: number): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'});
    const options = new RequestOptions({ headers: headers});

    return this.http.delete('http://192.168.1.9:8000/api/rest/tipousuario?id=' + id, options)
            .map( (res: Response) => res )
            .catch( this.handleError);
  }

  deleteUser(dni: string): Observable<any> {
    const headers = new Headers({'Access-Control-Allow-Origin ': ' * ', 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers});

    return this.http.delete( 'http://192.168.1.9:8000/api/rest/usuarios?dni=' + dni, options)
            .map( (res: Response) => res )
            .catch( this.handleError );
  }

  deleteAssistence(id: number): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers});

    return this.http.delete('http://192.168.1.9:8000/api/rest/asistencia?id=' + id, options)
            .map( (res: Response) => res.json() )
            .catch( this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    return Observable.throw( 'Server'  );
  }
}
