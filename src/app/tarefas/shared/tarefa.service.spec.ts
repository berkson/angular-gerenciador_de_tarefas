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

  it('deve acrescentar uma tarefa a lista', ()=>{
    service.cadastrar(new Tarefa(789, 'testes3', false));
    expect(service.listartodos().length).toEqual(3);
  });

  it('deve retornar a tarefa de id 456', () =>{
    let tarefa = service.buscarPorId(456);
    expect(tarefa?.nome).toEqual('teste2');
  });

  it('deve alterar o status da tarefa de id 456 para true', ()=>{
    expect(service.buscarPorId(456)?.concluida).toEqual(false);
    service.alterarStatus(456);
    expect(service.buscarPorId(456)?.concluida).toEqual(true);
  });
});
