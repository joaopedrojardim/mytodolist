import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  deleteItemTaskList(event:number){
    this.taskList.splice(event,1)
  }

  setEmitTaskList(event:string){

    if(event) this.taskList.push({task:event, checked:false})
  }

  deleteAllTaskList(){
    const confirm = window.confirm("Você deseja apagar tudo?")
    if (confirm) this.taskList = []
  }

  validationInput(event: string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?")

      if(confirm) this.deleteItemTaskList(index)
    }
  }

  setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}
