import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { Subject } from 'rxjs'
import { map, merge } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) {


   }
   private parseResponse(obj){
    return obj
  }
   getPhotos(){
     return this.http.get('https://jsonplaceholder.typicode.com/photos') .pipe(mergeMap(r => this.parseResponse(r)))
   }
   getText(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/3');
  }
}
