import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs-compat/operator/filter';
import { Cocktail } from './models/cocktail.model';
import { search } from './utils/search';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Cocktail[], filterText: string): any {
    if (!list || !filterText) {
      return list;
  } return search({list, filterText})
      .sort((a: any, b: any) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
  }
}
