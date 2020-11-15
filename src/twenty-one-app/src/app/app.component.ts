import { Component } from '@angular/core';
// import { MatTabGroup } from "@angular/material/tabs";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService } from './task.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  mySecondForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private taskservice: TaskService) { }

  title = 'twenty-one-app';

  get f(){
    return this.myForm.controls;
  }

  get finfer(){
    return this.mySecondForm.controls;
  }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  
  onDatasetFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.mySecondForm.patchValue({
        fileSourceNew: file
      });
    }
  }

  response: string

  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);
   
    
    console.log(formData)
    this.taskservice.uploadFile(formData).subscribe(res => {
      this.response = res
      console.log(res)
    })
  }

  inferSwitch: Boolean = false

  inferClicked(){
    this.inferSwitch = true
  }

  inferenceResponse: string

  submitForInference(){
    const formData = new FormData();
    formData.append('file', this.mySecondForm.get('fileSource').value);
    // formData.append('task_id','okP0KEPL')
    console.log(formData)
    this.taskservice.runModelOnSample(formData).subscribe(res => {
      this.inferenceResponse = res
      console.log(res)
    })
  }

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

  taskresponse: string

  task_object = {
    task_object:{
      name: null,
      type: 'regression',
      data_id: 'energy',
      data_details: {
        type: 'tabular',
        domain: null,
        source: 'local_db'
      },
      source_properties: null,
      objective: null,
      evaluation: {
        metric: 'mse'
      }
    }
  }

  taskSubmit(){
    const tabCount = 3;
    this.demo1TabIndex = (this.demo1TabIndex + 1) % tabCount;
    console.log(this.task_object)
    this.taskservice.postTaskData(this.task_object).subscribe(res => {
      console.log(res)
      
      this.taskresponse = res
    })
  }

  uploadData(){

  }

}
