import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-read/product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Inicializando o objeto product com valores padrão
  product: Product = {
    proNome: '',          
    proPrecoCusto: null,    
    proPrecoVenda: null,
    proDescricao: '',
    proQuantidadeEstoque: null,
    proStatus: '',
    proCategoria: '',
    proCodigoBarras: '' ,
    proMarca: '' ,
    proDataCadastro: new Date,
    proDataAtualizacao: new Date
  };

  // Importando ProductService
  constructor(private productService: ProductService, private router: Router) { }
 
  ngOnInit(): void {
    // Inicializações adicionais, se necessário
  }

  // Método chamado quando o botão "Salvar" é clicado
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {  // Chamando o método create do ProductService para criar o produto
      this.productService.showMessage('Produto criado!'); // Exibindo mensagem de sucesso após criar o produto
      this.router.navigate(['/products']); // Redirecionando para a página de produtos
    });
  }

  // Método chamado quando o botão "Cancelar" é clicado
  cancel(): void {
    // Redirecionando para a página de produtos
    this.router.navigate(['/products']);
  }
}
