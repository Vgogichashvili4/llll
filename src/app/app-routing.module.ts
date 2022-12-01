import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActiveUsersPgComponent } from './active-users-pg/active-users-pg.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ArchitectureStudentsComponent } from './architecture-students/architecture-students.component';
import { CategoryPgComponent } from './category-pg/category-pg.component';
import { CompanyComponent } from './company/company.component';
import { FullUserInfoPgComponent } from './full-user-info-pg/full-user-info-pg.component';
import { MedicalStudentsComponent } from './medical-students/medical-students.component';
import { ProductComponent } from './product/product.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    component:CompanyComponent,path:"company"
  },
  {
    component:CompanyComponent,path:""
  },
  {
    component:ProductComponent,path:"product",children:[
      {
        component:AddproductComponent,path:"create"
      },
      {
        component:AddproductComponent,path:"edit/:id"
      }
    ]
  },
  {
    component:AddCompComponent,path:'add-user'
  },

  {
    component:UpdateUserComponent,path:'update/:id'
  },
  {component:ActiveUsersPgComponent,path:'user-status'},
  {component:CategoryPgComponent,path:'category'},
  {path:'full-info',component:FullUserInfoPgComponent},
  {path:'architecture-student-status',component:ArchitectureStudentsComponent},
  {path:"medical-students-status",component:MedicalStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
