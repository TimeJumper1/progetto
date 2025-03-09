import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {interval} from "rxjs";
@Component({
  standalone: true,
  selector: 'async-observable-pipe',
  template: `<div><code>observable|async</code>:
       Time: {{ time | async }}</div>`,
  imports: [CommonModule]
})
export class AsyncObservablePipeComponent {

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  }).pipe();
}
