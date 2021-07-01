import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errorMessage:string='';
  islandSelected : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  menuClicked(menu: String): void{
    alert("menu clicked - " + menu);
    if(menu === "island"){
      this.islandSelected = !this.islandSelected;
    }
  }

}
