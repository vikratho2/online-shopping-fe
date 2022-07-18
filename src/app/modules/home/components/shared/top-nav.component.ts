import { Component, OnDestroy, OnInit } from "@angular/core";
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { takeWhile } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { CartComponent } from "../cart/cart.component";


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: [`./top-nav.component.scss`],

})
export class TopNavComponent implements OnInit, OnDestroy {
  isAlive = true;
  cartData: any = []
  constructor(
    private _DialogService: DialogService,
    private _CartService: CartService,
    private _DynamicDialogRef: DynamicDialogRef

  ) {

  }
  ngOnInit() {
    this._CartService.getProduct().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      if (data) {
        this.cartData = data
      }
    })
  }
  ngOnDestroy() {
    this._DynamicDialogRef.close();
    this.isAlive = false
  }
  openCart() {
    this._DialogService.open(CartComponent, {

      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      styleClass: 'custom-cart'

    })
  }

}
