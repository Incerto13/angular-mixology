// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CocktailViewComponent } from './components/cocktail-view/cocktail-view.component';
import { CocktailRouteActivator } from './services/cocktail-route-activator.service';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'cocktails/:id', component: CocktailViewComponent,
  canActivate: [CocktailRouteActivator] 
},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InventoryComponent,
    SearchFilterPipe,
    CocktailViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
