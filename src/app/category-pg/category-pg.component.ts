import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-pg',
  templateUrl: './category-pg.component.html',
  styleUrls: ['./category-pg.component.css']
})
export class CategoryPgComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  infBtnClick(){
    this.router.navigate(['user-status'])
  }
  inf2BtnClick(){
    this.router.navigate(['med-user-status'])
  }
  inf3BtnClick(){
    this.router.navigate(['architecture-students'])
  }

}
