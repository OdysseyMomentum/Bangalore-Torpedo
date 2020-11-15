import { Component } from '@angular/core';
// import { MatTabGroup } from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twenty-one-app';

  task = {
    _id:'',
    name:'',
    type:'',
    data_id:'',
    data_details: {
      type:''
    },
    evaluation : {
      metric: ''
    },
    objective: '',
    link:'',
    status:'Pending'
  }

  public demo1TabIndex = 0;
  public demo1BtnClick() {
    
  }

  taskSubmit(){
    const tabCount = 2;
    this.demo1TabIndex = (this.demo1TabIndex + 1) % tabCount;
  }

}
