import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(
    private _ApiService: ApiService
  ) { }

  getBanners(): Promise<any> {
    return this._ApiService.getRequest(`/banners`);
  }
  getCategories(): Promise<any> {
    return this._ApiService.getRequest(`/categories`);
  }
  getProducts(): Promise<any> {
    return this._ApiService.getRequest(`/products`);
  }
  addToCart(): Promise<any> {
    return this._ApiService.getRequest('/addToCart')
  }
}
