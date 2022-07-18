import { ThisReceiver } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { DialogService } from "primeng/dynamicdialog";
import { takeWhile } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { MainService } from "src/app/services/main.service";
import { NotifierService } from "src/app/services/notifier.service";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-product',
  templateUrl: "./products.component.html",
  styleUrls: [`./products.component.scss`],

})
export class ProductComponent implements OnInit, OnDestroy {
  products: any;
  filteredProducts: any;
  serverUri = environment.apiUri;
  categories: any;
  totalItemInCart: any = [];
  isAlive = true
  window: any
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _CartService: CartService,
    private _DialogService: DialogService,
    private _NotifierService: NotifierService,
    private _MainService: MainService
  ) { }
  ngOnInit() {
    this._CartService.getProduct().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      if (data) {
        this.totalItemInCart = data
      }
    })
    this._ActivatedRoute?.data?.subscribe((data: any) => {
      [this.products, this.categories] = data.data;
      this.filteredProducts = this.products;
      this.categories.map((val: any) => val.active = false);
      this._ActivatedRoute.queryParamMap.subscribe((param: any) => {
        if (param.params.id) {
          this.filteredProducts = this.products.filter((val: any) => val.category === param.params.id)
          this.categories.sort((a: any, b: any) => {
            return Number(a.order) - Number(b.order)
          });
          this.categories.map((val: any) => {
            if (val.id === param.params.id) {
              val.active = true;
            } else {
              val.active = false
            }
          })
        } else {
          this.categories.map((val: any) => val.active = false)
        }
      })
    })
  }
  categoryFilter(id: any) {
    this._Router.navigate([`products`], { queryParams: { id: id } });
  }
  BuyNow(pId: any) {
    const [filterProduct] = this.products.filter((val: any) => val.id === pId);
    const checkExisting = this.totalItemInCart.filter((val: any) => val.id === filterProduct.id)
    if (checkExisting.length === 0) {
      this.totalItemInCart.push(filterProduct)
      this._CartService.setProduct(this.totalItemInCart);
      this._MainService.addToCart().then((data: any) => {
        this._NotifierService.showSuccess(data.response, data.responseMessage)
      })


    }


  }
  ngOnDestroy() {
    this.isAlive = false;
  }
}
