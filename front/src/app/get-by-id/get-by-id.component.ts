import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from '../bike.service';
import { Bike } from '../bike';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
 
  bik:Bike=new Bike();

  id:number;

constructor(private act:ActivatedRoute,private ser:BikeService,private rout:Router){}
  ngOnInit(): void {

  this.id= this.act.snapshot.params['id'];

  this.getId();
  }


  getId(){

    this.ser.getId(this.id).subscribe((res)=>{

      this.bik=res;
      
    })

  }

  BackToHome() {

    this.rout.navigate(['']);

  }





}
