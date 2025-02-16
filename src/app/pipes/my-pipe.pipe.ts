import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  pure:false
})
export class MyPipePipe implements PipeTransform {
  private total: number = 0;
  private discount: number= 10;

  transform(price: number): unknown {
    return this.total + (price - this.discount);
  }

}
