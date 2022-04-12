import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMsg: string =""
  public userConfirm:any
  public pennyExpress:Array<any>=localStorage["shoppingMall"] ?JSON.parse(localStorage["shoppingMall"]) :[]
  public findUser:any
  public userIndex:any


  constructor( private _fb: FormBuilder,public router:Router) { }
  public registrationForm: any
  get email(){return this.registrationForm.get('email');}


  ngOnInit(): void {
    this.registrationForm= this._fb.group({
      emailLog:[""],
      passwordLog:[""]
    })
  }



signIn(){
  this.userConfirm= this.registrationForm.value
  this.findUser=this.pennyExpress.find((val:any,i:any)=>this.pennyExpress[i].email==this.registrationForm.value.emailLog && this.pennyExpress[i].password == this.registrationForm.value.passwordLog)
  console.log(this.findUser);
  if(!this.findUser){
    this.errorMsg="Details not found, kindly enter correct details"

  } else{
    this.userIndex= this.pennyExpress.indexOf(this.findUser)
    localStorage.setItem("shoppingSignInIndex", this.userIndex)
    alert(`Welcome ${this.findUser.userName}`)
    this.router.navigate([""])
    

  }
  
    
  





}
}