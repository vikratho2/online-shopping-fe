import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { CartService } from "src/app/services/cart.service";
import { NotifierService } from "src/app/services/notifier.service";
import { CartComponent } from "./cart.component"

describe('cart component test', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let dynamicDialogRef: DynamicDialogRef;
  let router: Router;
  let notifierService: NotifierService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [RouterTestingModule, DialogModule],
      providers: [CartService, NotifierService, DynamicDialogRef, MessageService]

    }).compileComponents()
    cartService = TestBed.inject(CartService);
    dynamicDialogRef = TestBed.inject(DynamicDialogRef);
    router = TestBed.inject(Router);
    notifierService = TestBed.inject(NotifierService)
    fixture = TestBed.createComponent(CartComponent);
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

  it('should create the cart', () => {
    expect(component).toBeDefined();
  })
  it('check itemDecrement()', () => {
    component.itemDecrement('5b6c6a7f01a7c38429530883');
    expect(component.cartData).toBeTruthy()
  })

  it('check itemIncrement()', () => {
    component.itemIncrement('5b6c6a7f01a7c38429530883');
    expect(component.cartData).toBeTruthy()
  })

  it('check startShopping()', () => {
    component.startShopping();

    expect(dynamicDialogRef).toBeTruthy()
  })


})
