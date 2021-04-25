import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(categories: any, searchValue?: any): any {
    if(!categories)return null;
    if(!searchValue)return categories;

    searchValue = searchValue.toLowerCase();

    return categories.filter((c: any) => {
        return JSON.stringify(c).toLowerCase().includes(searchValue);
    });
}
}
