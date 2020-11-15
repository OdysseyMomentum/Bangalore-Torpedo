import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  public postTaskData(req): Observable<any>{
    const base = this._http.post('api/task',req)
    
    const request = base.pipe(
      map(data => data)
    );

    return request;
  }

  public getTasks(): Observable<any> {
    const base = this._http.get('api/get_tasks')

    const request = base.pipe(
      map(data => data)
    );

    return request;
  }

  public runModelOnSample(req): Observable<any> {
    const base = this._http.post('api/run_model',req)
    
    const request = base.pipe(
      map(data => data)
    );

    return request;
  }
}
