import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PopupComponent } from './popup/popup.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { AddCompComponent } from './Tech-students/add-user/add-comp.component';
import { ActiveUsersPgComponent } from './Tech-students/active-users-pg/active-users-pg.component';
import { CategoryPgComponent } from './category-pg/category-pg.component';
import { UpdateUserComponent } from './Tech-students/update-user/update-user.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FullUserInfoPgComponent } from './Tech-students/full-user-info-pg/full-user-info-pg.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { MedicalStudentsComponent } from './Medicine-students/medical-students/medical-students.component';
import { ArchitectureStudentsComponent } from './Architecture/add-user-pg/architecture-students/architecture-students.component';
import { TechStudentsListComponent } from './Tech-students/tech-students-list/tech-students-list.component';
import { AddMedUserComponent } from './Medicine-students/medical-students/add-med-user/add-med-user.component';
import { MedUserActiveStatusComponent } from './Medicine-students/medical-students/med-user-active-status/med-user-active-status.component';
import { MedFullUserInfoPgComponent } from './Medicine-students/medical-students/med-full-user-info-pg/med-full-user-info-pg.component';
import { MedUserUpdateComponent } from './Medicine-students/medical-students/med-user-update/med-user-update.component';




 



@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ProductComponent,
    AddproductComponent,
    AddCompComponent,
    ActiveUsersPgComponent,
    CategoryPgComponent,
    UpdateUserComponent,
    FullUserInfoPgComponent,
    MedicalStudentsComponent,
    ArchitectureStudentsComponent,
    TechStudentsListComponent,
    AddMedUserComponent,
    MedUserActiveStatusComponent,
    MedFullUserInfoPgComponent,
    MedUserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right',timeOut:2000 }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
