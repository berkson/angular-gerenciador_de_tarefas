import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective {

  @Input() tarefaConcluida: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
