import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-add-med-user',
  templateUrl: './add-med-user.component.html',
  styleUrls: ['./add-med-user.component.css']
})
export class AddMedUserComponent {
 
  // id:string ="";
  // formDefaultData!:any
  constructor(private builder: FormBuilder, private dialog: MatDialog, private api: ApiService,private activatedRoute:ActivatedRoute,
    private router:Router,private toastr: ToastrService,private serv:ProductService) { }

  ngOnInit(): void {
   
  }

  companyform = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    gmail: this.builder.control('', Validators.required),
    personalNumber: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    dateOfBirth: this.builder.control('', Validators.required),
    category: this.builder.control('', Validators.required),
    isactive: this.builder.control(true),
  });

  SaveCompany() {
    if (this.companyform.valid) {
      const Editid = this.companyform.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.api.UpdateComapny(Editid, this.companyform.getRawValue()).subscribe(response => {
          this.router.navigate(['/'])
          this.toastr.success('Uploaded successfully');
          this.router.navigate([''])
        });
      } else {
        this.api.CreateComapny(this.companyform.value).subscribe(response => {
          this.closepopup();
          this.toastr.success('Saved successfully');
          this.router.navigate(['medical-students'])
        });
      }
    }
  }

  closepopup() {
    this.dialog.closeAll();
  }

  onCancelBtnClick(){
    this.router.navigate(["medical-students"]);
  }
}
