import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';

const routes: Routes = [
  {path:"",component:GetAllComponent},
  {path:"getAll",component:GetAllComponent},
  {path:"posts",component:PostComponent},
  {path:"deleteById/:id",component:DeleteComponent},
  {path:"updateById/:id",component:UpdateComponent},
  {path:'getById/:id',component:GetByIdComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
