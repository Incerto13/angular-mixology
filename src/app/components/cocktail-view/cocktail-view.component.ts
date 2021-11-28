import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cocktail-view',
  templateUrl: './cocktail-view.component.html',
  styleUrls: ['./cocktail-view.component.css']
})
export class CocktailViewComponent implements OnInit {
    cocktail!: Cocktail;
  // cocktails: Cocktail[] = [];
  param!: number;

  constructor(private cocktailService: CocktailService, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  //   this.cocktailService.getCocktails().subscribe((cocktails) => {
  //     this.cocktails = cocktails;
  //     
  //  });
    this.route.params.forEach((params: Params) => {
      this.cocktailService.getCocktail(+params['id']).subscribe((cocktail) => {
        this.cocktail = cocktail[0];
        console.log('cocktail:', this.cocktail); // debug
      });
      
    });
    
  }

}
