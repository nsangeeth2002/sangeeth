import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Bike } from '../bike';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
 

  constructor(private rout:Router,private bik:BikeService){}

bike= new FormGroup({
  name:new FormControl(),
  color:new FormControl(),
  price:new FormControl(),

});

postDatas() {

   const ss=this.bike.value as Bike;
   console.log(ss);
   this.bik.post(ss).subscribe((res)=>{
    console.log(res);
    this.rout.navigate(['']);
   })
 }


back() {

  this.rout.navigate(['']);
 
  }
   
}
