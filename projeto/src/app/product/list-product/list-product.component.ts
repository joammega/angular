import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:Product[];

  constructor(private productService: ProductService,
              private router:Router) { 
    this.products = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.productService.list().subscribe(
      (res:Product[])=>{
        this.products = res;
      }
    );
  }

  delete(id:number){
    if(!confirm("Are you sure?")){
      return;
    } 
    
    this.productService.delete(id).subscribe(
      (res:any)=>{
        console.log(`Product id ${id} deleted!`);
        this.list();
      }
    );
  }

  edit(id:number){
    //nevegação imperativa
    this.router.navigate(['edit/product',id]);
  }

}
