import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor-read/fornecedor.model'; // Ajuste o caminho conforme necessário
import { FornecedorService } from '../fornecedor.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    forCnpj: null,                // Inicializado como 0
    forRazaoSocial: '',        // Inicializado como string vazia
    forNomeFantasia: ''        // Inicializado como string vazia
  };

  // Importando FornecedorService
  constructor(private fornecedorService: FornecedorService, private router: Router) { }
 
  ngOnInit(): void {
    // Inicializações adicionais, se necessário
  }

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado!');
      this.router.navigate(['/fornecedores']); // Ajuste a rota conforme necessário
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']); // Ajuste a rota conforme necessário
  }
}