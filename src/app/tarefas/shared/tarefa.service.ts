import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  public static readonly LISTNAME: string = 'tarefas';

  constructor() { }

  listartodos(): Tarefa[] {
    const tarefas = localStorage[TarefaService.LISTNAME];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listartodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage[TarefaService.LISTNAME] = JSON.stringify(tarefas);
  }

  /**
   * Devido ao modo estrito tive de adicionar esse retorno.
   * @param id 
   * @returns Tarefa[] ou indefinido
   */
  buscarPorId(id: number): Tarefa | undefined {
    const tarefas: Tarefa[] = this.listartodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listartodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) objs[index] = tarefa;
    });
    localStorage[TarefaService.LISTNAME] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listartodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage[TarefaService.LISTNAME] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listartodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id)
        objs[index].concluida = !obj.concluida;
    });
    localStorage[TarefaService.LISTNAME] = JSON.stringify(tarefas);
  }
}
