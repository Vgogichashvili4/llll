import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { companymodel } from '../Model/companymodel';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from '../shared/api.service';
// import * as alertify from 'alertifyjs'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private dialog: MatDialog, private api: ApiService,private toastr: ToastrService,private router:Router) { }
  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  // @ViewChild(MatSort) _sort!:MatSort;
  @ViewChild(MatSort) sort!: MatSort; 
  companydata!: companymodel[];
  finaldata:any;
  prgorammers:any[] = []

  ngOnInit(): void {
    this.LoadCompany();
  }

  displayColums: string[] = ["id", "gmail", "personalNumber", "name", "lastName", 'dateOfBirth', 'category', "isactive", "action"]

  // Openpopup(id: any) {
  //   const _popup = this.dialog.open(PopupComponent, {
  //     width: '500px',
  //     exitAnimationDuration: '1000ms',
  //     enterAnimationDuration: '1000ms',
  //     data: {
  //       id: id
  //     }
  //   })
  //   _popup.afterClosed().subscribe(r => {
  //     this.LoadCompany();
  //   });
  // }

  filterData($event : any){
    this.finaldata.filter = $event.target.value;
}

  LoadCompany() {
    this.api.Getallcomapny().subscribe(response => {
      this.companydata = response;
      this.finaldata=new MatTableDataSource<companymodel>(this.companydata);
      this.finaldata.paginator=this._paginator;
      for(let i=0; i<this.finaldata.length;i++){
        if(this.finaldata[i].category == "InformationTechnology"){
            this.prgorammers.push(this.finaldata[i])
        }
      }
      console.log(this.prgorammers,"prrr")
      // this.finaldata.sort=this._sort;
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
