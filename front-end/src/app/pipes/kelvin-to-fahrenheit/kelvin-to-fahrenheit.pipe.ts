import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToFahrenheit'
})
export class KelvinToFahrenheitPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    const f = ((9/5) * (value - 273)) + 32
    return Math.floor(f);
  }

}
