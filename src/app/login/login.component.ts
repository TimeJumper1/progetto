import {Component, SimpleChange} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {compileDeclareDirectiveFromMetadata} from "@angular/compiler";
import {Router} from "@angular/router";
// import { AuthService } from '../auth.service';
import { Input } from '@angular/core'; // First, import Input
import { Output, EventEmitter } from '@angular/core';
import {filter, Observable, of, Subject} from 'rxjs';

class NewsItem {
  category: 'Bussiness' | 'Sports' | undefined;
  content: string | undefined;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  @Input() item = ''; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();
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

  subject$ = new Subject();
  ngOnInit(){
    this.fb;
    this.subject$.subscribe(val => {
      console.log(val);
    });
    this.subject$.next("1");
    this.subject$.next("2");
    this.subject$.complete();
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

  ngOnChanges(changes: SimpleChange){

    const numbers$ = of(1, 2, 3);
    this.lanciaTutto();

    numbers$.subscribe({
      next: value => console.log('Observable emitted the next value: ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });

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
    this.subject$.subscribe({
      next: value => console.log('subjetc belloh ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }

    sum(x:number, y:number, z:number) {
      return x + y + z;
    }
    stampa(){
      let arrayBruttoNumeri = [ 2, 3,5];


      // @ts-ignore
      console.log(this.sum(...arrayBruttoNumeri));


    }
  lanciaOutput(value: string) {
    this.newItemEvent.emit(value);
    this.funzzioneConnomePocoOriginale();
    
  }

  funzzioneConnomePocoOriginale(){
    const newsFeed$ = new Observable<NewsItem>((subscriber) => {
      setTimeout(() => {
        subscriber.next({ category: 'Bussiness', content: 'A' });
      }, 1000);
      setTimeout(() => {
        subscriber.next({ category: 'Sports', content: 'B' });
      }, 3000);
      setTimeout(() => {
        subscriber.next({ category: 'Bussiness', content: 'C' });
      }, 4000);
      setTimeout(() => {
        subscriber.next({ category: 'Sports', content: 'D' });
      }, 5000);
      setTimeout(() => {
        subscriber.next({ category: 'Bussiness', content: 'E' });
      }, 6000);
    });

    const sub:Subscrition = newsFeed$
      .pipe(filter((item) => item.category === 'Sports'))
      .subscribe((item) => console.log("pippo suppli "+item));
      sub.unsubscribe();
  }

  - Refactoring struttura
  - Change Detection
  - Validators - metterlo esterno non nel costruttore
  - Guardie - SOLO DA BINDARE ALLA ROTTA
  - Interceptor
  - Resolvers

}
