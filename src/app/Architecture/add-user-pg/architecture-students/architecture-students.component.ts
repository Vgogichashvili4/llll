import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/api.service';
import { companymodel } from '../../../Model/companymodel';

@Component({
  selector: 'app-architecture-students',
  templateUrl: './architecture-students.component.html',
  styleUrls: ['./architecture-students.component.css']
})
export class ArchitectureStudentsComponent {

  constructor(private dialog: MatDialog, private api: ApiService,private toastr: ToastrService,private router:Router) { }
  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  companydata!: companymodel[];
  finaldata:any;
  prgorammers:any[] = []
  tech:any[] = []

  ngOnInit(): void {
    this.LoadCompany();
  }

  displayColums: string[] = ["id", "gmail", "personalNumber", "name", "lastName", 'dateOfBirth', 'category', "isactive", "action"]

 

  filterData($event : any){
    this.finaldata.filter = $event.target.value;
}


  LoadCompany() {
    this.api.Getallcomapny().subscribe(response => {
      this.prgorammers = response;
      console.log(this.prgorammers)
      for(let i =0; i<this.prgorammers.length;i++){
        if(this.prgorammers[i].category == "Architecture"){
            this.tech.push(this.prgorammers[i])
        }
      }
      this.companydata = this.tech;
      this.finaldata=new MatTableDataSource<companymodel>(this.companydata);
      this.finaldata.paginator=this._paginator;
      this.finaldata.sort = this.sort;
    });
  }

  // EditCompany(id: any) {
  //   this.Openpopup(id);
  // }


  RemoveCompany(id: any) {
    this.api.RemoveCompanybycode(id).subscribe(r => {
      this.toastr.success('Deleted successfully');
        this.LoadCompany();
      });
    }

    createBtnClick(){
      this.router.navigate(['add-user'])
    }

}

