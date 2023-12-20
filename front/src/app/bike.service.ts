import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bike } from './bike';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  put(ss: Bike) {
    throw new Error('Method not implemented.');
  }

  url="http://localhost:3000/"
  constructor(private http:HttpClient) { }



getAll(){
return this.http.get<Bike[]>(this.url+'getAll');
}

post(bik:Bike){
  return this.http.post<Bike>(this.url+'posts',bik);
}

delete(id:number){
  return this.http.delete<Bike>(this.url+'deleteById/'+id);
}

update(id:number,bik:Bike){
  return this.http.put<Bike>(this.url+'updateById/'+id,bik);
}

getId(id:number){
  return this.http.get<Bike>(this.url+'getById/'+id);
}


}
