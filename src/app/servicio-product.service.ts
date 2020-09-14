import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from './Models/Producto'

@Injectable({
  providedIn: 'root'
})
export class ServicioProductService {

  private url = 'http://localhost:57640/api/product';
  productos:Producto[]=[];

  constructor(private http: HttpClient) { }


  getProductos(){
    this.http.get<Producto[]>(this.url).subscribe(
      response => {
        console.log(response);
        this.productos = response;
      }
    );
  }
}
