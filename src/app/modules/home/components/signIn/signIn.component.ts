import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signIn',
  templateUrl: `./signIn.component.html`,
  styleUrls: [`./signIn.component.scss`]
})
export class SignInComponent {
  signInForm: FormGroup;
  signInFormSubmitted = false;
  signInFormSubmitting = false;
  constructor(
    private _FormBuilder: FormBuilder
  ) {
    this.signInForm = this._FormBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }
  signInFormSubmit() {
    this.signInFormSubmitted = true;
    if (this.signInForm.valid) {
      this.signInFormSubmitting = true;

    }
  }

}
