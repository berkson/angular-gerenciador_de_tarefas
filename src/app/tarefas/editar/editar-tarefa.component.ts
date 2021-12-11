import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    let busca = this.tarefaService.buscarPorId(id);
    this.tarefa = busca !== undefined ? busca : new Tarefa();
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      if (this.tarefa !== undefined)
        this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);

    }
  }

}
