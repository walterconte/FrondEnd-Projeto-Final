import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'] // ou .scss se usar
})
export class NavComponent {
  // Dados para mini gráficos doughnut
  public vendasData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Vendas', 'Restante'],
    datasets: [{ data: [75, 25], backgroundColor: ['#4caf50', '#ddd'] }]
  };

  public clientesData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Clientes', 'Restante'],
    datasets: [{ data: [40, 60], backgroundColor: ['#2196f3', '#ddd'] }]
  };

  public estoqueData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Estoque', 'Restante'],
    datasets: [{ data: [55, 45], backgroundColor: ['#ff9800', '#ddd'] }]
  };

  // Controle do menu (não obrigatório, o matMenu gerencia)
  // Métodos para ações do menu dropdown
  acao1() {
    console.log('Opção 1 clicada');
    // aqui você pode colocar a lógica real
  }

  acao2() {
    console.log('Opção 2 clicada');
  }

  acao3() {
    console.log('Opção 3 clicada');
  }

  // Métodos extras (exemplo)
  cadastrarProduto() {
    console.log('Cadastrar produto acionado');
  }

  novoCliente() {
    console.log('Novo cliente acionado');
  }

  gerarRelatorio() {
    console.log('Gerar relatório acionado');
  }
}
