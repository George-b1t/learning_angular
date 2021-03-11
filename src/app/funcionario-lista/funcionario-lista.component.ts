import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-lista',
  templateUrl: './funcionario-lista.component.html',
  styleUrls: ['./funcionario-lista.component.sass']
})
export class FuncionarioListaComponent implements OnInit {

  public funcionarios: Array<any> = [];

  constructor(
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.getFuncionarios();
    console.log(this.funcionarios);
  }
}
