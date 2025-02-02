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
  ngOnChanges(){


    this.lanciaTutto();


  }
  lanciaTutto() {
    let array = [
      {
        "name":"pippo",
        "valore":1
      },
      {
        "name":"pluto",
        "valore":11
      },
      {
        "name":"paperino",
        "valore":12
      },{
        "name":"osvaldo",
        "valore":13
      }

    ]
    let osvaldo = array.filter(nomi => nomi.name ==="osvaldo")
    console.log(osvaldo)
    let numeri = array.map(numeri => numeri.valore*numeri.valore)
    console.log("valori quadrati"+numeri)
    let numeroMassimo0 = array.reduce((massimo,corrente)=>
      massimo.valore > corrente.valore ? massimo : corrente, array[0])
    console.log("reduce"+numeroMassimo0)
  }

    sum(x:number, y:number, z:number) {
      return x + y + z;
    }
    stampa(){
      let arrayBruttoNumeri = [ 2, 3,5];

      // @ts-ignore
      console.log(this.sum(...arrayBruttoNumeri));
// Expected output: 6

    }


}
