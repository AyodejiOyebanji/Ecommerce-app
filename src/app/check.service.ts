import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  public myUser: any=[]


  constructor() { }

  getAllMyuser(){
    if(localStorage['shoppingMall']){
      this.myUser =JSON.parse(localStorage['shoppingMall'])
    }else{
      this.myUser =[]
    }

    return this.myUser

  }






}
