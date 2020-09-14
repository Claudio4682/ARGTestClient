import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServicioProductService} from './servicio-product.service'
import { Producto } from './Models/Producto'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  productos:Producto[];
  private url = 'http://localhost:57640/api/product';

  constructor(private servicio: ServicioProductService) {
    this.obtenerProd();
  }

  obtenerProd(){
    this.servicio.getProductos();
  }
  


}
