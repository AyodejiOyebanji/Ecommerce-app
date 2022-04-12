import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public productObj:any
  public errorMsg: string =""
  public itemIndex:any
  public  pennyAdmin:Array<any>=localStorage["eAdmin"] ?JSON.parse(localStorage["eAdmin"]) :[]
  public myItemObj:any
  public nProduct:string=""
  public pProduct:number=0
  public  pBadge:string=""
  public  quantity:number= 1
  

  constructor( ) { }
  // public adminAdditem: any
  // get nProduct(){return this.adminAdditem.get('nProduct');}
  // get pProduct(){return this.adminAdditem.get('pProduct');}
  // get pBadge(){return this.adminAdditem.get('pBadge');}
  // get  pFile(){return this.adminAdditem.get(' pFile');}
  

  public myImg:any ="";
  ngOnInit(): void {
    this.quantity=1
  
    // this.adminAdditem= this._fb.group({
    //   nProduct:[""],
    //   pProduct:[""],
    //   pBadge:[""],
    //   pFile:[""]
    // })
  }
  readFile(event:any){
    const newFile =event.target.files[0]
    console.log(newFile)
    const reader = new FileReader()
    reader.readAsDataURL(newFile);
    reader.onload = ()=>{
      // console.log(reader.result)
      this.myImg = reader.result
    }
    console.log(this.myImg)
   
  }

  addItem(){
    // this.productObj = this.adminAdditem.value
    
    
    
    if(this.nProduct==""&& this.pProduct==0 && this.pBadge=="" && this.myImg==""){
      this.errorMsg="Please fill your product details"
    }else if(this.nProduct==""||this.pProduct==0 || this.pBadge=="" || this.myImg==""){
      this.errorMsg="Fill up your product's missing details"    

    } else{
      this.myItemObj={
        name : this.nProduct,
        price: this.pProduct,
        where:this.pBadge,
        pimage:this.myImg ,
        quan:this.quantity


      }
      this.pennyAdmin.push(this.myItemObj)       
      localStorage.setItem("eAdmin", JSON.stringify(this.pennyAdmin));
       this.errorMsg="Successfully Added";
       this.nProduct=""
       this.pProduct
       this.pBadge=""
       this.myImg=""
       
    }
     
  }
  

 }

