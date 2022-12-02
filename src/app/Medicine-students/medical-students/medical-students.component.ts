import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { companymodel } from '../../Model/companymodel';
import { PopupComponent } from '../../popup/popup.component';
import { ApiService } from '../../shared/api.service';
// import * as alertify from 'alertifyjs'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-medical-students',
  templateUrl: './medical-students.component.html',
  styleUrls: ['./medical-students.component.css']
})
export class MedicalStudentsComponent {
  constructor(private dialog: MatDialog, private api: ApiService,private toastr: ToastrService,private router:Router,private serv:ProductService) { }
  @ViewChild('paginator') paginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort
  companydata!: companymodel[];
  finaldata:any;
  prgorammers:any[] = []
  tech:any[] = []

  ngOnInit(): void {
    this.LoadCompany();
  }

  displayedColums: string[] = ["id", "gmail", "personalNumber", "name", "lastName", 'dateOfBirth', 'category', "isactive", "action"]
  dataSource!:MatTableDataSource<any>;

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
    this.dataSource.filter = $event.target.value;
}


  LoadCompany() {
    this.api.Getallcomapny().subscribe(response => {
      this.prgorammers = response;
      console.log(this.prgorammers)
      for(let i =0; i<this.prgorammers.length;i++){
        if(this.prgorammers[i].category == "Medicine"){
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
      this.router.navigate(['add-med-user'])
    }

}
