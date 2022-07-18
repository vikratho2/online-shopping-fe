import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component"

describe('home testing', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({

      declarations: [HomeComponent]

    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create the home component', () => {
    expect(component).toBeDefined()
  })
})
