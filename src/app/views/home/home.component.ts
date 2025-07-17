import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public vendasData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Vendas'],
    datasets: [{ data: [75, 25], backgroundColor: ['#4caf50', '#ddd'] }]
  };

  public clientesData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Clientes'],
    datasets: [{ data: [40, 60], backgroundColor: ['#2196f3', '#ddd'] }]
  };

  public estoqueData: ChartData<'doughnut', number[], string | string[]> = {
    labels: ['Estoque'],
    datasets: [{ data: [55, 45], backgroundColor: ['#ff9800', '#ddd'] }]
  };
}
