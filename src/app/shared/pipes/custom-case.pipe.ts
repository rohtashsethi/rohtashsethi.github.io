import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCase',
})
export class CustomCasePipe implements PipeTransform {
  transform(value: string): string {
    const tokens = value.split(' ');

    const modifiedTokens = tokens.map((token, idx) => {
      const lower = token.toLocaleLowerCase();
      return idx ? lower : `_${lower}`;
    });

    return modifiedTokens.join('-');
  }
}
