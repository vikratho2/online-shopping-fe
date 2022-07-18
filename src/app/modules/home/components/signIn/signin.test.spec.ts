import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormBuilder } from "@angular/forms";
import { SignInComponent } from "./signIn.component"

describe('sign in component testing', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [],
      providers: [FormBuilder]
    }).compileComponents();
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the Sign in', () => {
    expect(component).toBeDefined();
  });
  it('check signInFormSubmit()', () => {
    component.signInFormSubmitted = true;
    component.signInFormSubmitting = true;
    component.signInFormSubmit();
    component.signInForm.controls.email.setValue('vikasrathour143@gmail.com');
    component.signInForm.controls.password.setValue('123');
    expect(component.signInForm.valid).toBeTruthy();


  })
})
