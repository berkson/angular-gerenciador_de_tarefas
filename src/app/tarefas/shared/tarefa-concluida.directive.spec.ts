import createSpyObj = jasmine.createSpyObj;
import { Directive, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

let element: ElementRef = createSpyObj('idNaicsRef', ['nativeElement']);

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ TarefaConcluidaDirective ]
  })
  .compileComponents();
});

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    const directive = new TarefaConcluidaDirective(element);
    expect(directive).toBeTruthy();
  });
});
