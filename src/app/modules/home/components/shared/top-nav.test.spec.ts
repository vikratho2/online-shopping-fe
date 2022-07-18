import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { DialogModule } from "primeng/dialog";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { CartService } from "src/app/services/cart.service";
import { CartComponent } from "../cart/cart.component";
import { TopNavComponent } from "./top-nav.component"

describe('top nav component test', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;
  let cartService: CartService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavComponent, CartComponent],
      imports: [RouterTestingModule, DialogModule],
      providers: [CartService, DialogService, DynamicDialogRef]
    }).compileComponents();
    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
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
    cartService.setProduct(fakeData)
    fixture.detectChanges();
  })
  it('should create the top nav', () => {
    expect(component).toBeDefined();
  })
  it('check openCart()', () => {
    component.openCart();
    expect(CartComponent).toBeTruthy();
  })
})
