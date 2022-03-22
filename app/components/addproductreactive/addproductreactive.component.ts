import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproductreactive',
  templateUrl: './addproductreactive.component.html',
  styleUrls: ['./addproductreactive.component.css']
})
export class AddproductreactiveComponent implements OnInit {
   form =new FormGroup({
     pname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
     price : new FormControl('',[Validators.required]),
     quantity : new FormControl('',[Validators.required]),
   })
  constructor(private myser:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  get f(){
    return this.form.controls;
  }
  addProducts(){
     let formData=this.form.getRawValue();//get values in object
     this.myser.addProducts(formData)
     .subscribe(res=>{
       if(res){
         Swal.fire("Product Added")
         this.router.navigate(['/products'])
       }
     })
  }

}
