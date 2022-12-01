import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import { ActiveUsersPgComponent } from './active-users-pg/active-users-pg.component';
import { CategoryPgComponent } from './category-pg/category-pg.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FullUserInfoPgComponent } from './full-user-info-pg/full-user-info-pg.component';
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
import { MedicalStudentsComponent } from './medical-students/medical-students.component';
import { ArchitectureStudentsComponent } from './architecture-students/architecture-students.component';




 



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PopupComponent,
    ProductComponent,
    AddproductComponent,
    AddCompComponent,
    ActiveUsersPgComponent,
    CategoryPgComponent,
    UpdateUserComponent,
    FullUserInfoPgComponent,
    MedicalStudentsComponent,
    ArchitectureStudentsComponent
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
