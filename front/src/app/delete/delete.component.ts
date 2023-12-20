import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
id:number;
  constructor(private bik:BikeService,private act:ActivatedRoute,private rout:Router){}
  
  ngOnInit(): void {
        this.id=this.act.snapshot.params['id'];
        console.log(this.id);
        this.deletes();
   }

   deletes(){
    this.bik.delete(this.id).subscribe((res)=>{
      this.rout.navigate(['']);
    }); 
   }

}
