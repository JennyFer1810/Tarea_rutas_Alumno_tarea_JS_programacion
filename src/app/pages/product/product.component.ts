/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

constructor (private httpClient:HttpClient){
}

ngOnInit(): void{
  //this.getProducts();
  //this.getProduct();
  //this.createProduct();
  //this.updateProduct();
  this.deleteProduct();
}

getProducts(){
  const url = 'https://api.escuelajs.co/api/v1/products';
  const response  = this.httpClient.get(url).subscribe(
  response =>{
    console.log(response);
  }
  )//haciendo peticion al backend
  console.log(response);
}

getProduct(){
  const url = 'https://api.escuelajs.co/api/v1/products';
  const response  = this.httpClient.get(url).subscribe(
  response =>{
    console.log(response);
  }
  )//haciendo peticion al backend
  console.log(response);
}

createProduct(){
  const data ={
      "title": "zapatos",
      "price": 40,
      "description": "zapatos deportivos / Jenny Chalacán",
      "categoryId": 1,
      "images": ["https://w0.peakpx.com/wallpaper/733/785/HD-wallpaper-inuyasha-the-final-act-dog-demon-inuyasha-full-moon-anime.jpg"] //una imagen
  }

  const url = 'https://api.escuelajs.co/api/v1/products';
  this.httpClient.post(url, data).subscribe(
  response =>{
    console.log(response);
  })//haciendo peticion al backend
};

updateProduct(){
  const data ={
      "title": "zapatos nike new",
      "price": 90,
      "description": "zapatos deportivos color blanco nike / Jenny",
  }

  const url = 'https://api.escuelajs.co/api/v1/products/181';
  this.httpClient.put(url, data).subscribe(
  response =>{
    console.log(response);
  });//haciendo peticion al backend
};

deleteProduct(){
  const url = 'https://api.escuelajs.co/api/v1/products/180';
  this.httpClient.delete(url).subscribe(
  response =>{
    console.log(response);
  }
  )//haciendo peticion al backend

}
}
*/

import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/pages/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products:ProductModel[] = [];

   selectedProduct: UpdateProductDto = {title:'', price:0, description:''};

  constructor(private productService:ProductService) {
   this.editProduct();
  }
  
  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts(){
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productService.getAll().subscribe(
      response =>{
        this.products = response;
        console.log(response);
      }
    )
  }
  getProduct(id: ProductModel['id'] ){
    const url = "https://api.escuelajs.co/api/v1/products/id";
    return this.productService.getOne(id).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  createProduct(product: CreateProductDto){
    this.productService.store(product).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  updateProduct(id: ProductModel['id'], product:UpdateProductDto){
    this.productService.update(id, product).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  editProduct(){
    this.selectedProduct = {title:'', price:0, description:''};
  }
  
  deleteProduct(id: ProductModel['id']){
    this.productService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(product => product.id != id); 
        console.log(response);
      }
    )
  }
}

