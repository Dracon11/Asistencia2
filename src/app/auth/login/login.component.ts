import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public router: Router;
  public form: FormGroup;
  public user: AbstractControl;
  public password: AbstractControl;

  constructor(router: Router, fb: FormBuilder) {
      this.router = router;
      this.form = fb.group({
          'user': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength[50] ])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(6) , Validators.maxLength[50] ])]
      });

      this.user = this.form.controls['user'];
      this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
      if (this.form.valid) {
         this.router.navigate(['principal/dashboard']);
      }

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
      document.getElementById('preloader').classList.add('hide');
  }

}
/*
export function emailValidator(control: FormControl): {[key: string]: any} {
    // tslint:disable-next-line:prefer-const
    let emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
} */
