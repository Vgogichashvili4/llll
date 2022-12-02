import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// import * as alertify from 'alertifyjs'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { companymodel } from 'src/app/Model/companymodel';


@Component({
  selector: 'app-tech-students-list',
  templateUrl: './tech-students-list.component.html',
  styleUrls: ['./tech-students-list.component.css']
})
export class TechStudentsListComponent {
  constructor(private api: ApiService,private toastr: ToastrService,private router:Router) { }
  @ViewChild('paginator') paginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort
  companydata!: companymodel[];
  finaldata:any;
  prgorammers:any[] = []
  tech:any[] = []


  ngOnInit(): void {
    this.LoadCompany();
  }

  displayedColumns?: string[] = ["id", "gmail", "personalNumber", "name", "lastName", 'dateOfBirth', 'category', "isactive", "action"]
  dataSource!:MatTableDataSource<any>;


  filterData($event : any){
    this.dataSource.filter = $event.target.value;
}

  LoadCompany() {      
    this.api.Getallcomapny().subscribe(response => {
      this.prgorammers = response;
      console.log(this.prgorammers)
      for(let i =0; i<this.prgorammers.length;i++){
        if(this.prgorammers[i].category == "Information Technology"){
            this.tech.push(this.prgorammers[i])
        }
      }
      this.companydata = this.tech;
      this.dataSource = new MatTableDataSource(this.companydata); 
      this.dataSource.paginator = this.paginator; 
      this.dataSource.sort = this.matSort; 
    }); 
  }             



  RemoveCompany(id: any) {
    this.api.RemoveCompanybycode(id).subscribe(r => {
      this.toastr.success('Deleted successfully');
      setInterval(() => {
        location.reload();
      },500)
      });
    }

    createBtnClick(){
      this.router.navigate(['add-user'])
    }
}
