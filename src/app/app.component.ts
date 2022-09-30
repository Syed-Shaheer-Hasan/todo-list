import { Component,ViewChild } from '@angular/core';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  list:any[] = [];
  @ViewChild('task') inputName:any;

  addTask(item:any)
  {
    this.list.push({id:this.list.length,name:item,subtask:[]})
    this.inputName.nativeElement.value = ' ';
    console.log(this.list); 
    localStorage.setItem("todos", JSON.stringify(this.list))
    
  }
  removeTask(id:any)
  {
    console.warn(id);
    this.list = this.list.filter(removeItem =>removeItem.id!==id)
    localStorage.removeItem("todos");

  }
  constructor(){
    let localItem = localStorage.getItem("todos");
    if (localItem == null){
      this.list = [];
    }
    else{
      this.list = JSON.parse(localItem);
    }
  }
}
