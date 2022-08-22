import { Pipe } from '@angular/core';
import { PipesComponent } from './pipes.component';

// @Pipe({
//   name: 'highlight'
// })
// export class HighlightPipe implements PipeTransform {

//   transform(value:any, colors: any): any {

//     return colors;
    // if (cityCode  != 'NY')
    // {
    //   return 'Apple City';
    // }
    // else
    // {
    //   return 'Garden City';
    // }
    // return 'City Name:' + city 

    // if(colors)
    // {


    // }    
  // }
  
// }

@Pipe({
  name: 'purePipe',
  
})
export class HighlightPipe implements PipesComponent {
  onClickAdd(): void {
    throw new Error('Method not implemented.');
  }
  title: string;
  colors: string[];
  users: { // {
    //   return 'Apple City';
    // }
    // else
    // {
    //   return 'Garden City';
    // }
    // return 'City Name:' + city 
    // if(colors)
    // {
    // }    
    // }
    // }
    name: string; age: number;
  }[];

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

