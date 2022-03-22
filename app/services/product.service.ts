import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 URL="http://localhost:3001/products/"
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(this.URL);
  }
  getProductById(id:any){
    return this.http.get(`${this.URL}${id}`)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.URL}${id}`)
  }
  addProducts(data:any){
    return this.http.post(this.URL,data);
  }
}
