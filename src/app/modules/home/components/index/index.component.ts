import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-index',
  templateUrl: "./index.component.html"
})
export class IndexComponent implements OnInit {
  banner: any;
  responsiveOptions: any;
  categories: any;
  serverUri = environment.apiUri
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() {
    this._ActivatedRoute?.data?.subscribe((data: any) => {
      [this.banner, this.categories] = data.data;
      this.categories.sort((a: any, b: any) => {
        return Number(a.order) - Number(b.order)
      });
    })

  }
  navigateToProduct(id: any) {
    this._Router.navigate([`products`], { queryParams: { id: id } });
  }
}
