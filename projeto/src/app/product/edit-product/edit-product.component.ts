import { NgForm } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Product = new Product();
  
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private router:Router,
              private toasty:ToastrService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.productService.retrieveById(id).subscribe(
      (res:Product)=>{
        this.product = res;
      }
    );
  }

  onSubmit(editForm:NgForm){

    if(editForm.invalid){
      this.toasty.error("All fields are required.");
      return;
    }

    this.productService.update(this.product).subscribe(
      (res:Product)=>{
        console.log(`Product id ${res.id} updated!`);
        this.router.navigate(["list/product"]);
      },
    );
  }

}
