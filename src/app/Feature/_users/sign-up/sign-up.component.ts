import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  emailSignUpFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordSignUpFormControl = new FormControl('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}
}
