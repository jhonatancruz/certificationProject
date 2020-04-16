import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return value.filter((item) => {

      if(item.description === null){
        return ((item.title.toUpperCase().indexOf(args[0].toUpperCase()) >= 0)) || 
            (item.type.toUpperCase().indexOf(args[0].toUpperCase()) >= 0);
      }

      return ((item.title.toUpperCase().indexOf(args[0].toUpperCase()) >= 0)) || 
            (item.description.toUpperCase().indexOf(args[0].toUpperCase()) >= 0) ||
            (item.type.toUpperCase().indexOf(args[0].toUpperCase()) >= 0);
    });
  }

}
