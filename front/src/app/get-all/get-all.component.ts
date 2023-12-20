import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit  {

  bik: Bike[];

  constructor(private ser:BikeService,private rout:Router,private act:ActivatedRoute) {}

ngOnInit(): void {
  
  this.getAll();

 }
 getAll(){
  this.ser.getAll().subscribe((res)=>{
    this.bik=res;
    console.log(res);
  });
 }





postData() {

  this.rout.navigate(['posts'])
   }


   goToGet(id: number) {

    this.rout.navigate(['getById',id]);
    

    }
    goToUpdate(id: number) {
      this.rout.navigate(['updateById',id])
     }
    DeleteById(id: number) {
     this.rout.navigate(['deleteById',id]);
     }
}
