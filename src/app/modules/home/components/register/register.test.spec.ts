import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormBuilder } from "@angular/forms";
import { RegisterComponent } from "./register.component"

describe('register component test', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [],
      providers: [FormBuilder]
    }).compileComponents()
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create the Sign in', () => {
    expect(component).toBeDefined();
  })

  it('check registerFormSubmit()', () => {
    component.registerFormSubmitted = true;
    component.registerFormSubmitting = true;
    component.registerFormSubmit();
    component.registerForm.controls.firstName.setValue('vikas');
    component.registerForm.controls.lastName.setValue('rathour');
    component.registerForm.controls.email.setValue('vikasrathour143@gmail.com');
    component.registerForm.controls.password.setValue('123');
    component.registerForm.controls.confirmPassword.setValue('123');
    expect(component.registerForm.valid).toBeTruthy();
  })
})
