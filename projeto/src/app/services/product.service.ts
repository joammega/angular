import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://localhost:3000/products";

  constructor(private httpClient:HttpClient) { }

  register(prod:Product){
    return this.httpClient.post(this.url,prod);  
  }

  list(){
    return this.httpClient.get(this.url);  
  }

  delete(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  retrieveById(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  update(prod:Product){
    return this.httpClient.put(`${this.url}/${prod._id}`,prod);
  }
}
