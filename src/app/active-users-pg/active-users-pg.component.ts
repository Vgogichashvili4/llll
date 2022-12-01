import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { companymodel } from '../Model/companymodel';
import { PopupComponent } from '../popup/popup.component';
import { ApiService } from '../shared/api.service';
// import * as alertify from 'alertifyjs'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';




@Component({
  selector: 'app-active-users-pg',
  templateUrl: './active-users-pg.component.html',
  styleUrls: ['./active-users-pg.component.css']
})
export class ActiveUsersPgComponent implements OnInit {

  constructor(private dialog: MatDialog, private api: ApiService) { }
  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  // @ViewChild(MatSort) _sort!:MatSort;
  @ViewChild(MatSort) sort!: MatSort; 
  companydata!: companymodel[];
  finaldata:any;
  programmers:any[] = []
  selectedValue!:string 
  apiResponse:any


  ngOnInit(): void {
    this.LoadCompany();
  }

  displayColums: string[] = ["id", "name", "isactive", "action"]

  Openpopup(id: any) {
    const _popup = this.dialog.open(PopupComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.LoadCompany();
    });
  }

  filterData($event : any){
    this.finaldata.filter = $event.target.value;
}

  LoadCompany() {
    this.api.Getallcomapny().subscribe(response => {
      this.apiResponse = response
      this.companydata = response;
      // for(let i =0;i<this.companydata.length;i++){
      //   if(this.companydata[i].isactive == false){
      //       this.programmers.push(this.companydata[i])
      //       console.log(this.programmers)
      //   }
      // }
      // console.log(this.finaldata)
      // this.companydata = this.programmers
      this.finaldata=new MatTableDataSource<companymodel>(this.companydata);
      this.finaldata.paginator=this._paginator;
      // this.finaldata.sort=this._sort;
      this.finaldata.sort = this.sort;

    });
  }

  EditCompany(id: any) {
    this.Openpopup(id);
  }
  RemoveCompany(id: any) {
    // alertify.confirm("Remove Company", "do you want remove this company?", () => {
    //   this.api.RemoveCompanybycode(id).subscribe(r => {
    //     this.LoadCompany();
    //   });
    // }, function () {

    // })


  }
  onChange($event:any){
    let filterData = _.filter(this.apiResponse,(item)=>{
      console.log(item.isactive)
      return item.isactive.toLowerCase() == $event.value.toLowerCase()
    })
    this.finaldata = new MatTableDataSource(filterData);
  }
  

}





//  this.allusers =res;
//       for(let i = 0;i <this.allusers.length;i++){
//         if(this.allusers[i].isactive == true){
//           console.log(this.allusers[i])
//           this.activeUsers.push(this.allusers[i])
//         }
//         else{
//           this.inActiveUsers.push(this.allusers[i])
//         }
//       }
//       console.log(this.activeUsers)
//       console.log(this.inActiveUsers)