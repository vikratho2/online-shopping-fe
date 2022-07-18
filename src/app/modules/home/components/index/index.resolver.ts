import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { MainService } from "src/app/services/main.service";

@Injectable()
export class IndexResolver implements Resolve<any>{
  constructor(
    private _MainService: MainService
  ) {

  }
  resolve(): Promise<any> {
    return Promise.all([
      this._MainService.getBanners().then((res) => res),
      this._MainService.getCategories().then((res) => res)
    ])

  }
}
