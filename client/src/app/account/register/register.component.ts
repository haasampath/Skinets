import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AsyncValidatorFn,
} from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { timer, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: string[];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        ],
        [this.validateEmailNotTaken()] // this one will be execute if erlier validation passed
      ],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe(
      (response) => {
        this.router.navigateByUrl('/shop');
      },
      (error) => {
        console.log(error);
        this.errors = error.errors;
      }
    );
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    // return asyncValidatorFn
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null); // if does not have any
          }
          return this.accountService.checkEmailExists(control.value).pipe(
            map(res => {
              return res ? { emailExists: true } : null; // our validator set to true if email exists
            })
          );
        })
      );
    };
  }
}
