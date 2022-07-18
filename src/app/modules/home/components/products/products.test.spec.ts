import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { MainService } from "src/app/services/main.service";
import { routes } from "../../home.routing";
import { ProductComponent } from "./products.component"

describe('products component test', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const fakeActivatedRoute = {
    snapshot: {}
  } as ActivatedRoute;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes),
        RouterModule, DialogModule


      ],
      providers: [MainService, { provide: ActivatedRoute, useValue: fakeActivatedRoute }, { provide: Router, useValue: routerSpy }, DialogService, DynamicDialogRef, MessageService],
      declarations: [ProductComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create the products component', () => {
    expect(component).toBeDefined();
  })
  it('check categoryFilter()', () => {
    component.categoryFilter('123');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['products'], { queryParams: { id: '123' } });
  })

  it('check BuyNow()', () => {
    let fakeData = [
      {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
      }
    ]
    component.products = fakeData
    component.BuyNow('5b6c6a7f01a7c38429530883')
  })
})
