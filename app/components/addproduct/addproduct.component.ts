import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  constructor(private proser:ProductService,private router:Router) { }
  ngOnInit(): void {
  }
  addProduct(form:any){
   // console.log(form)
    let pname=form.pname;
    let price=form.price; 
    let quantity=form.quantity;
    let formData={pname:pname,price:price,quantity:quantity}
    this.proser.addProducts(formData)
    .subscribe(res=>{
      if(res){
         Swal.fire("Product Added");
         this.router.navigate(['/products']);
      } 
    })
  }
}
