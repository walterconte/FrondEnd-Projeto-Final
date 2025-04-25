import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-read/product.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080/produtos" // URL base para requisições ao servidor

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } // Construtor do serviço

  showMessage(msg: string): void{ // Método para exibir mensagens de notificação
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{ // Método para criar um novo produto
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{ // Método para ler todos os produtos
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{ // Método para ler um produto por id
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product :Product): Observable<Product>{ // Método para atualizar um produto
    const url = `${this.baseUrl}/${product.proId}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product>{ // Método para excluir um produto
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

}
