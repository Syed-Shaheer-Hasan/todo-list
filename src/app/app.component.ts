import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  list:any[] = [];
 
  addTask(item:any)
  {
    this.list.push({id:this.list.length,name:item})
    console.log(this.list);
    localStorage.setItem("todos", JSON.stringify(this.list))
  }
  removeTask(id:number)
  {
    this.list= this.list.filter(item=>item.id!==id)
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
