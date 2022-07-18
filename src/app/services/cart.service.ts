import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Subject<any>
  constructor() {
    this.product = new BehaviorSubject(null)
  }

  setProduct(data: any) {
    this.product.next(data)

  }
  getProduct(): Observable<any> {
    return this.product.asObservable();
  }
}
