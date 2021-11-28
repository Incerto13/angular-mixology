import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';
import { Router } from '@angular/router';
import { sanitize } from '../../utils/search';



@Component({
  selector: 'app-search',
  styles: ['.highlightText {background-color: yellow}'],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,  // allows dynamic css from component
})
export class SearchComponent implements OnInit {
  searchTerm!: string;
  cocktails: Cocktail[] = [];
  term!: string;
  searchResults!: Cocktail[];


  constructor(private http: HttpClient, 
    private cocktailService: CocktailService,
    public router: Router
    ) { }

  ngOnInit(): void {
      // sort results alphabetically
      this.cocktailService.getCocktails().subscribe((cocktails) => {
        this.cocktails = cocktails.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          });
        });
  }

  public highlightedIngredients(searchTerm: string, ingredients: any) {
    // multi-term
    if (searchTerm.includes(',')) {
      let searchTerms = searchTerm.split(',');
      searchTerms = searchTerms.map((searchTerm) => sanitize(searchTerm));
      console.log('searchTerms: ', searchTerms); // debug
      let newIngredients = ingredients;
      for (const searchTerm of searchTerms) {
        console.log('sanitized Search Term: ', searchTerm); 
        newIngredients = newIngredients.replace(new RegExp(searchTerm, "gi"), (match: string) => {
          return `<span class="highlightText"> ${match} </span>`
        });
      }
      return newIngredients;
      // single term
    } else if (searchTerm) {
        return ingredients.replace(new RegExp(sanitize(searchTerm), "gi"), (match: string) => {
          return `<span class="highlightText"> ${sanitize(match)} </span>`
        });
      } else return ingredients;
  }

  public highlightedInstructions(searchTerm: string, instruction: any) {
    // multi-term
    if (searchTerm.includes(',')) {
      let searchTerms = searchTerm.split(',');
      searchTerms = searchTerms.map((searchTerm) => sanitize(searchTerm));
      let newInstruction = instruction;
      for (const searchTerm of searchTerms) {
        newInstruction = newInstruction.replace(new RegExp(searchTerm, "gi"), (match: string) => {
          return `<span class="highlightText"> ${match} </span>`
        });
      }
      return newInstruction;
      // single term
    } else if (searchTerm) {
        return instruction.replace(new RegExp(sanitize(searchTerm), "gi"), (match: string) => {
          return `<span class="highlightText"> ${sanitize(match)} </span>`
        });
      } else return instruction;
  }

  public withHighlightedTerms(searchTerm: string, html: any) {
    // multi-term
    if (searchTerm.includes(',')) {
      let searchTerms = searchTerm.split(',');
      searchTerms = searchTerms.map((searchTerm) => sanitize(searchTerm));
      let newHtml = html;
      for (const searchTerm of searchTerms) {
        console.log('searchTerm: ', searchTerm);
        newHtml = newHtml.replace(new RegExp(searchTerm, "gi"), (match: string) => {
          return `<span class="highlightText">${match}</span>`
        });
      }
      return newHtml;
      // single term
    } else if (searchTerm) {
      console.log(searchTerm);
        return html.replace(new RegExp(searchTerm, "gi"), (match: string) => {
          return `<span class="highlightText">${match}</span>`
        });
      } else return html;
  }
}


