import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { of as observableOf, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [`./register.component.scss`]
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerFormSubmitting = false;
  registerFormSubmitted = false
  constructor(
    private _FormBuilder: FormBuilder
  ) {
    this.registerForm = this._FormBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required], this.confirmpasswordvalidation()]

    })
  }
  confirmpasswordvalidation(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return control.value === this.registerForm.controls.password.value ? observableOf(null) : observableOf({ 'notSame': true });
    };
  }

  registerFormSubmit() {
    this.registerFormSubmitted = true;
    if (this.registerForm.valid) {
      this.registerFormSubmitting = true
    }
  }
}
