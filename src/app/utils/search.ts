import { Cocktail } from "../models/cocktail.model";

export interface searchProps {
    list: Cocktail[]
    filterText: string;
}

// use comma (',') as term delimitter

export const search = ({ list, filterText }: searchProps) => {
    // multi-term search
    if (filterText.includes(',')) {
        let terms = filterText.split(',');
        terms = terms.map((term) => sanitize(term));
        console.log('terms: ', terms); // debug
        let newList = filterByTerm(list, terms[0]);;
        for (const term of terms.slice(1)) {
            newList = filterByTerm(newList, term);
        }
        return newList;
    } 
    // single term search
    return filterByTerm(list, sanitize(filterText))  
};

const filterByTerm = (list: Cocktail[], term: string) => {
    return list.filter((c) => {
        const ingredients = [];
        const quantities = [];
        // iterate over ingredients array to gather relevant strings
        for (const item of c.ingredients) {
          for (const [k, v] of Object.entries(item)) {
            ingredients.push(k);
            quantities.push(v);
          }
        }
        return  (
          c.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) // search name
            // c.name.match(/[term]/gi)
          || ingredients?.join('|').toLocaleLowerCase().includes(term.toLocaleLowerCase()) // ingredients
       // || quantities?.join('|').toLocaleLowerCase().includes(term.toLocaleLowerCase()) // quantities
          || c.instructions?.join('|').toLocaleLowerCase().includes(term.toLocaleLowerCase()) // instructions
          || c.tags?.join('|').toLocaleLowerCase().includes(term.toLocaleLowerCase()) // tags
        ) 
      });
}

export const sanitize = (s: string): any => {
    return s.trim();
}