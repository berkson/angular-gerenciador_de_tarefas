import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listartodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); // para evitar atualização da página
    if (confirm(`Deseja remover a tarefa ${tarefa.nome} ?`)) {
      if (tarefa.id !== undefined) {
        this.tarefaService.remover(tarefa.id);
        this.tarefas = this.tarefaService.listartodos();
      }
    }
  }

  alterarstatus(tarefa: Tarefa): void {
    if(confirm(`Deseja alterar o status da tarefa ${tarefa.nome} ?`)){
      if(tarefa.id !== undefined){
        this.tarefaService.alterarStatus(tarefa.id);
        this.tarefas = this.listarTodos();
      }
    }
  }

}
