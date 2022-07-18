import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { MainService } from "./main.service"
import { environment } from "src/environments/environment";
import { ApiService } from "./api.service";
import { CartService } from "./cart.service";
import { NotifierService } from "./notifier.service";
import { MessageService } from "primeng/api";

describe('main service testing', () => {
  let mainService: MainService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  let apiURI = environment.apiUri;
  let apiService: ApiService;
  let cartService: CartService;
  let notifierService: NotifierService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MainService, ApiService, CartService, NotifierService, MessageService],

    })
    apiService = TestBed.inject(ApiService);
    mainService = TestBed.inject(MainService);
    httpClient = TestBed.inject(HttpClient);
    cartService = TestBed.inject(CartService);
    httpController = TestBed.inject(HttpTestingController);
    notifierService = TestBed.inject(NotifierService);

  })
  it('main api service define', () => {
    expect(mainService).toBeDefined();
  })
  it('check getBanner api', () => {
    const testData = true
    mainService.getBanners().then((data) => expect(data).toEqual(testData));
    const req = httpController.expectOne(`${apiURI}/banners`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

  })
  it('check getCategories api', () => {
    const testData = true;
    mainService.getCategories().then((data) => expect(data).toEqual(testData));
    const req = httpController.expectOne(`${apiURI}/categories`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData)
  })

  it('check getProducts api', () => {
    const testData = true;
    mainService.getProducts().then((data) => expect(data).toEqual(testData));
    const req = httpController.expectOne(`${apiURI}/products`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData)
  })
  it('check addToCart api', () => {
    const testData = true;
    mainService.addToCart().then((data) => expect(data).toEqual(testData));
    const req = httpController.expectOne(`${apiURI}/addToCart`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  })
  it('check api get request', () => {
    const testData = true;
    const Error = true;
    apiService.getRequest('/products').then((data) => expect(data).toEqual(testData)).catch((err) => expect(err).toEqual(Error));
    const req = httpController.expectOne(`${apiURI}/products`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  })
  it('should be create cart Service', () => {
    expect(cartService).toBeTruthy();
  })
  it('check addProduct()', () => {
    let fakeData = [{
      id: 'test'
    }]
    cartService.setProduct(fakeData)
    expect(fakeData).toBeTruthy();
  })
  it('check getProduct()', () => {
    cartService.getProduct().subscribe((data) => expect(data).toEqual(data))
  })

  it('check showSuccess()', () => {
    notifierService.showSuccess('Success', 'request success');
    expect('Success').toEqual('Success')
  })
  it('check showInfo()', () => {
    notifierService.showInfo('Info', 'please find information');
    expect('Info').toEqual('Info')
  })
  it('check showError()', () => {
    notifierService.showError('Error', 'bad request');
    expect('Error').toEqual('Error')
  })
})
