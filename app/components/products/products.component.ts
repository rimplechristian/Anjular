import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   proData:any;
  constructor(private proser:ProductService) { }

  ngOnInit(): void {
      this.proser.getProducts()
      .subscribe(res=>{
        this.proData=res
      },err=>{
        console.log(err)
      })
  }
  delProduct(id:any){
    // if(confirm("Do u want to delete product ?"))
    // {
    //    this.proser.deleteProduct(id)
    //    .subscribe(res=>{
    //      if(res){
    //        alert("Product Deleted")
    //        this.proser.getProducts()
    //        .subscribe(res=>{
    //          this.proData=res
    //        },err=>{
    //          console.log(err)
    //        })
    //      }
    //    })
    // }
    Swal.fire({
      title: 'Do you want to Delete?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.proser.deleteProduct(id)
       .subscribe(res=>{
         if(res){
          Swal.fire('Product Deleted!', '', 'success')
           this.proser.getProducts()
           .subscribe(res=>{
             this.proData=res
           },err=>{
             console.log(err)
           })
         }
       })
       
      } 
    })
  }

}
