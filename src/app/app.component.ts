import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  list:any[]=[];
  addTask(items:any)
  {
    console.log(this.list);
    this.list.push({id:this.list.length,name:items})
  }
}
