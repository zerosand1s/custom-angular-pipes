import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): string {
    let reverseString = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverseString += value.charAt(i);
    }

    return reverseString;
  }

}
