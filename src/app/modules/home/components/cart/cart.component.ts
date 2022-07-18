import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { takeWhile } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { NotifierService } from "src/app/services/notifier.service";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: [`./cart.component.scss`]
})
export class CartComponent implements OnInit, OnDestroy {
  isAlive = true;
  cartData: any = [];
  serverUri = environment.apiUri;
  total = 0
  constructor(
    private _CartService: CartService,
    private _DynamicDialogRef: DynamicDialogRef,
    private _Router: Router,
    private _NotifierService: NotifierService
  ) { }
  ngOnInit() {


    this._CartService.getProduct().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      if (data) {
        this.cartData = data;
        this.cartData.map((val: any) => {
          val.itemCount = 1;
        })
        this.totalCount()
      }

    })

  }
  totalCount() {
    const sumArray = this.cartData.map((val: any) => {
      return val.price * val.itemCount;
    })
    this.total = sumArray.reduce((a: any, b: any) => a + b, 0);


  }

  itemDecrement(id: any) {
    this.cartData.map((val: any) => {
      if (val.id === id) {
        val.itemCount = val.itemCount - 1
        if (val.itemCount === 0) {
          this.cartData.forEach((val: any, index: any, array: any) => {
            if (val.id === id) {
              array.splice(index, 1)
            }

          });
          this._CartService.setProduct(this.cartData)

        }
      }
    })
    this.totalCount()
  }
  itemIncrement(id: any) {
    this.cartData.map((val: any) => {
      if (val.id === id) {
        if (val.itemCount < val.stock) {
          val.itemCount = val.itemCount + 1
        } else {
          this._NotifierService.showError('Error', 'Out Of Stock')
        }
      }
    })
    this.totalCount()
  }
  startShopping() {

    this._DynamicDialogRef.close();
    this._Router.navigate([`/`])
  }
  ngOnDestroy() {
    this.isAlive = false
  }
}
