import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  product:Product;

  constructor(private productService: ProductService,
              private toasty:ToastrService,
              private router:Router) {
    this.product = new Product();
  }

  ngOnInit() {
  }

  onSubmit(registerForm:NgForm){
    if(registerForm.invalid){
      this.toasty.error("All fields are required.");
      return;
    }
    this.productService.register(this.product).subscribe(
      (res:Product)=>{
        console.log(`Produc id ${res.id} added!`)
        this.router.navigate(["list/product"]);
      }
    );
  }

}
