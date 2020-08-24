import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams.returnUrl || '/shop'; // if no return url then direct to shop //203
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]), // initial value '' and validation 190
      password: new FormControl('', Validators.required), // initial value '' and validation
    });
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigateByUrl(this.returnUrl); // 194, 203
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
