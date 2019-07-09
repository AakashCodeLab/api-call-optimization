import { Component, OnInit } from '@angular/core';
import {TestserviceService} from './testservice.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import youtubekey from  './aa'
import {HttpClient} from '@angular/common/http';

import { map, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
datas$=[];
datastext;
searchForm:FormGroup
  constructor(private testservice:TestserviceService, private fb:FormBuilder, private http:HttpClient){
  this.searchForm=this.fb.group({
    search:['',Validators.required]
  })
  }
  
ngOnInit(){
 this.getPhots();
 this.getText();
 this.search();
 console.log(youtubekey);
}
search() {
  this.searchForm.controls.search.valueChanges.pipe(
    debounceTime(500),
    filter(value => value.length > 3),
    distinctUntilChanged(),
    switchMap(searchTerm=>this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/3`)),
    map(response => response)
  ).subscribe(searchTerm => {
    
  console.log(searchTerm);
 });
}
getPhots(){
  this.testservice.getPhotos().subscribe((data)=>{
  
    this.datas$.push(data);
      })
}
getText(){
  this.testservice.getText().subscribe((data)=>{

    this.datastext=data;
      })
}
}
