import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente-read/cliente.model';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    cliEmail: '',
    cliTelefone: '',
    cliEndereco: '',
  };

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    // Inicialização, se necessário
  }

  createCliente(): void {
    // Verificação: nenhum campo pode estar vazio ou só com espaços
    if (
      !this.cliente.cliNome.trim() ||
      !this.cliente.cliCpf.trim() ||
      !this.cliente.cliEmail.trim() ||
      !this.cliente.cliTelefone.trim() ||
      !this.cliente.cliEndereco.trim()
    ) {
      this.clienteService.showMessage('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Se passou na validação, prossegue com o cadastro
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!');
      this.router.navigate(['/cliente']);
    });
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}