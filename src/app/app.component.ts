import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  list:any[]=[];
  addTask(item:any)
  {
    // console.log(this.list);
    this.list.push({id:this.list.length,name:item})
  }
  removeTask(id:number)
  {
    this.list= this.list.filter(item=>item.id!==id)
  }
}
