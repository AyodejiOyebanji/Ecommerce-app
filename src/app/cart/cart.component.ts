import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public pennyAdmin: any;
  public myGoods: any;
  public pennyExpress: Array<any> = localStorage['shoppingMall']
    ? JSON.parse(localStorage['shoppingMall'])
    : [];
  public indexOfMyUser: any;
  public pennyArray: any;
  public myCartHis: any;
  public initialCount: any;
  public priceIncrease: any;
  public indexOfItem: any;
  public total: any;
  public upDatedHistCart: any;
  public isDisable: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.pennyExpress = localStorage['shoppingMall']
      ? JSON.parse(localStorage['shoppingMall'])
      : [];
    this.indexOfMyUser = localStorage.getItem('shoppingSignInIndex');
    this.pennyAdmin = localStorage['eAdmin']
      ? JSON.parse(localStorage['eAdmin'])
      : [];
    this.myGoods = JSON.parse(localStorage['eAdmin']);
    console.log(this.myGoods);
    this.pennyArray = this.pennyExpress[this.indexOfMyUser];
    this.myCartHis = this.pennyExpress[this.indexOfMyUser].myCart;
    console.log(this.myCartHis);
  }
  mysub(i: any) {
    this.pennyExpress[this.indexOfMyUser].myCart[i].quan--;

    this.indexOfItem = this.myCartHis[i].price;
    console.log(this.indexOfItem);
    this.total = Number(this.indexOfItem) / 2;
    console.log(this.total);
    this.pennyExpress[this.indexOfMyUser].myCart[i].price -= this.total;
    console.log(this.pennyExpress[this.indexOfMyUser].myCart[i].price);

    localStorage.setItem('shoppingMall', JSON.stringify(this.pennyExpress));
  }
  myAdd(i: any) {
    this.pennyExpress[this.indexOfMyUser].myCart[i].quan++;
    this.indexOfItem = this.myCartHis[i].price;
    console.log(this.indexOfItem);
    this.total = Number(this.indexOfItem) * 2;
    console.log(this.total);
    this.pennyExpress[this.indexOfMyUser].myCart[i].price = this.total;
    console.log(this.pennyExpress[this.indexOfMyUser].myCart[i].price);

    localStorage.setItem('shoppingMall', JSON.stringify(this.pennyExpress));
  }
}
