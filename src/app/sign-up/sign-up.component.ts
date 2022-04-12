import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/password.validator';
// import { MyUser } from '../my-user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // public registrationForm: FormGroup;
  // registrationForm.controls = new MyUser("", "", "","","")
  public hasAnError:boolean =true;
  public errorMsg: string =""
  public submitted :boolean= false
  public userObj: any={}
  public pennyExpress:Array<any>=localStorage["shoppingMall"] ?JSON.parse(localStorage["shoppingMall"]) :[]
  
   

   

  constructor(
    private _fb: FormBuilder,public router:Router
  ) {}

  public registrationForm: any

  
  get fullName(){return this.registrationForm.get('fullName');}
  get userName(){return this.registrationForm.get('userName');}
  get email(){return this.registrationForm.get('email');}
  get password(){return this.registrationForm.get('password');}
  get cPass(){return this.registrationForm.get('cPass');}
  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      fullName: ["", [Validators.required, Validators.minLength(10 )]],
      userName: ["", [Validators.required, Validators.minLength(8 )]],
      email: ["", [Validators.required, Validators.email]],
      password:["", Validators.required],
      cPass:["", [Validators.required]],
      myCart:[[]],
      payment:[[]],
      profilePicture:[""]
    })

    this.registrationForm.validator = PasswordValidator
  }

  
  validselect(value:any){
    if(value=== 'default'){
      this.hasAnError=true
    }else{
      this.hasAnError= false
    }
  }
  
  submitForm() {
    this.userObj = this.registrationForm.value;
    console.log(this.userObj);

    if(this.userObj.fullName==""&& this.userObj.userName==""&& this.userObj.email==""&& this.userObj.password==""&& this.userObj.cPass==""){
      this.errorMsg= "Please fill in your details" 
    }else if(this.userObj.fullName==""|| this.userObj.userName==""|| this.userObj.email==""|| this.userObj.password==""|| this.userObj.cPass==""){
      this.errorMsg= "Please fill in the missing details"

    }else if(this.userObj.password.length< 8){
      this.errorMsg="Your password is less than 8 character"

    }else if(!this.userObj.email.includes("@gmail.com")){
      this.errorMsg="Your email do not include @"
    }else if(this.userObj.fullName<10){
      this.errorMsg= "Your Full name is less than 10 character"

    } else if(this.userObj.userName<8){
      this.errorMsg= "Your Username is less than 8 character"

    }else if(this.userObj.password !==this.userObj.cPass){
      this.errorMsg="Incorrect password"
    } else{
      this.pennyExpress.push(this.registrationForm.value)
      localStorage.setItem("shoppingMall",JSON.stringify(this.pennyExpress)) 
      // this.pennyExpress.push(this.registrationForm.value)
      // localStorage.setItem("shoppingMall", JSON.stringify(this.pennyExpress))
      alert("Congratulations you have successfully signup with PennyExpress ")
      this.router.navigate(["/login"])
      
    }

  }

}












  // onSubmit(){
    //   let formObj = this.registrationForm.value;

  //   if (this.registrationForm.invalid) {
  //     console.log("Form is Invalid")
  //   }else {
  //     console.log(formObj);
  //   }
  //   // if(this.registrationForm.controls.fullName.value==""){
      
  //   //   this.errorMsg= "Please fill up your details" 
  //   // } else if(this.registrationForm.controls.fullName=="" || this.registrationForm.controls.userName=="" || this.registrationForm.controls.email=="" || this.registrationForm.controls.password==""|| this.registrationForm.controls.cPass==""){
  //   //   

  //   // }
    

  //   // if (this.registrationForm.controls.invalid) {
      
  //   // }
  //   // console.log(this.registrationForm.controls);
    
    
  // }

