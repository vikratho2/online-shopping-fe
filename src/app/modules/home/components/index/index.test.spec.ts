import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { MainService } from "src/app/services/main.service"
import { HttpClient } from "@angular/common/http";
import { IndexComponent } from "./index.component";
import { ActivatedRoute, Router, RouterModule, ROUTES } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from "../../home.routing";



describe('index testing', () => {
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let mainService: MainService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  let indexComponent: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  const fakeActivatedRoute = {
    snapshot: {}
  } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes),
        RouterModule


      ],
      providers: [MainService, { provide: ActivatedRoute, useValue: fakeActivatedRoute }, { provide: Router, useValue: routerSpy }],
      declarations: [IndexComponent]
    }).compileComponents();
    mainService = TestBed.inject(MainService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(IndexComponent);
    indexComponent = fixture.componentInstance;
    fixture.detectChanges();

  })
  it('should create the index component', () => {
    expect(indexComponent).toBeTruthy();
  })
  it('should main service define', () => {
    expect(mainService).toBeDefined();
  })

  it('should call navigate with correct params', () => {
    indexComponent.navigateToProduct('123');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['products'], { queryParams: { id: '123' } });
  })

})
