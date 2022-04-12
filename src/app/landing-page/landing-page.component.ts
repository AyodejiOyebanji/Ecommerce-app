import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public  pennyAdmin:any
  public myGoods: any
  public pennyExpress:Array<any>=localStorage["shoppingMall"] ?JSON.parse(localStorage["shoppingMall"]) :[]
  public indexOfMyUser:any
  public pennyArray:any
  public firstName:any
  public getItemDetails:any
  public adminExistingGoods:any
  constructor() { }

  ngOnInit(): void {
    this.pennyExpress=localStorage["shoppingMall"] ?JSON.parse(localStorage["shoppingMall"]) :[]
    this.indexOfMyUser= localStorage.getItem("shoppingSignInIndex")
    this.pennyAdmin=localStorage["eAdmin"] ?JSON.parse(localStorage["eAdmin"]) :[]
    this.myGoods= JSON.parse(localStorage["eAdmin"]) 
    console.log(this.myGoods);
    this.pennyArray = this.pennyExpress[this.indexOfMyUser]
  
    

  }

  addToCart(i:any){
   this.getItemDetails =this.pennyAdmin[i]
    this.pennyExpress[this.indexOfMyUser].myCart.push(this.getItemDetails)
    localStorage.setItem("shoppingMall", JSON.stringify(this.pennyExpress))
     
   
  }
 
}
