
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impPipe',
  pure:false
})
export class ImpPipePipe implements PipeTransform {

  transform(arr: any[], prop: string): any[] {
     return arr.sort((a: any, b: any) => {
      if (a[prop] < b[prop]) {
        return -1;
      }
      else if (a[prop] > b[prop]) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }

}
