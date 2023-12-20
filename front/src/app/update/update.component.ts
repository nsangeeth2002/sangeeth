import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Bike } from '../bike';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

id:number;

bikes:Bike=new Bike();

bike=new FormGroup ({
  name:new FormControl(),
  color:new FormControl(),
  price:new FormControl()
})
  constructor(private rout:Router,private act:ActivatedRoute,private bik:BikeService){}


  ngOnInit(): void {
   this.id= this.act.snapshot.params['id'];
   console.log(this.id)
   this.getById();

   }

   getById(){
    this.bik.getId(this.id).subscribe((res)=>{

      console.log(res);

     this.bike.patchValue(res);

     
    });

   }

   updates() {
    const ss=this.bike.value as Bike;
    console.log(ss);
    this.bik.update(this.id,ss).subscribe((res)=>{
     console.log(res);
     this.rout.navigate(['']);
    })
     
     
     }
     
    back() {
      this.rout.navigate(['']);
     }
}
