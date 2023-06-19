import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() emitItemTaskList = new EventEmitter()

  addItemTaskList:string = ''

  submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim()
    this.emitItemTaskList.emit(this.addItemTaskList)
    this.addItemTaskList = ""
  }
}
