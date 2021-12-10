import { TestBed } from '@angular/core/testing';
import { Tarefa } from '.';

import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  let service: TarefaService;
  let tarefas: Tarefa[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
    tarefas = [new Tarefa(123, 'teste1', true), new Tarefa(456, 'teste2', false)];
    localStorage[TarefaService.LISTNAME] = JSON.stringify(tarefas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve mostrar o total de tarefas', ()=>{
    let total = service.listartodos().length;
    expect(total).toEqual(2);
  });
});
