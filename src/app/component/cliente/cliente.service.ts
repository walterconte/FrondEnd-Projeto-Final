import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './cliente-read/cliente.model';
import { Product } from '../product/product-read/product.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{ // Método para exibir mensagens de notificação
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente :Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente.cliId}`
    return this.http.put<Cliente>(url, cliente)
  }

  delete(id: number): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }
  
}
