import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  // this.http.post('http://localhost:5000/upload', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })

    public uploadFile(req): Observable<any> {
      const base = this._http.post('http://0.0.0.0:5000/data_upload', req)
      const request = base.pipe(
        map(data => data)
      );
  
      return request;
    }

  public postTaskData(req): Observable<any>{
    const base = this._http.post('http://0.0.0.0:5000/new_task',req)
    
    const request = base.pipe(
      map(data => data)
    );

    return request;
  }

  // public getTasks(): Observable<any> {
  //   const base = this._http.get('api/get_tasks')

  //   const request = base.pipe(
  //     map(data => data)
  //   );

  //   return request;
  // }

  public runModelOnSample(req): Observable<any> {
    const base = this._http.get('http://0.0.0.0:5000/infer',req)
    
    const request = base.pipe(
      map(data => data)
    );

    return request;
  }
}
