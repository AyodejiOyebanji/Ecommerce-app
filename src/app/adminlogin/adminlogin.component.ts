import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public adminLogIn:any
  public errorMsg: string =""

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  enter(){
    if(this.adminLogIn !== "1234"){
      this.errorMsg="Please fill in your correct password"
      
    } else{
      this.router.navigate(["/admin"])


      
    }
  }

}
