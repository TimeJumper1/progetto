import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {compileDeclareDirectiveFromMetadata} from "@angular/compiler";
import {Router} from "@angular/router";
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    function mioValidatore() {
      return (control: AbstractControl): { [key: string]: any } | null =>
        control.value?.toLowerCase().includes('q')
          ? null : {errore: "UwU"};

    }

    this.loginForm = this.fb.group({
      username: ['', [Validators.required,mioValidatore()]],
      password: ['', Validators.required],
    });
  }
// , private authService: AuthService
  ngOnInit(){
    this.fb;
  }

  onSubmit(): void {
    // @ts-ignore
    const username = this.loginForm.get('username').value;
    // @ts-ignore
    const password = this.loginForm.get('password').value;

    if (username == "aiutoq")  {
      console.log("funziona"+username)
      this.router.navigate(['customers']).then(r => console.log("porco"));
    } else {
      console.log("beeep"+username)
      // Display error message for unsuccessful login
    }
  }
}
