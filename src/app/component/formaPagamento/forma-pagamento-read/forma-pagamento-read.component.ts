import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from './forma-pagamento.model'; // Ajuste o caminho conforme necessário
import { FormaPagamentoService } from '../forma-pagamento.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  formaPagamentos!: FormaPagamento[]; // Corrigido para plural
  displayedColumns = ['fpgId', 'fpgDescricao', 'fpgTipo', 'fpgTaxa', 'fpgParcelamento', 'action']; // Corrigido para corresponder à interface

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formaPagamentos => { // Corrigido para plural
      this.formaPagamentos = formaPagamentos; // Corrigido para plural
      console.log(this.formaPagamentos);
    });
  }
}