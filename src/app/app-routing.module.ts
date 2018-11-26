import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent }   from './search-results/search-results.component';
import { MovieDetailComponent }   from './movie-detail/movie-detail.component';
import { TvDetailComponent }   from './tv-detail/tv-detail.component';

const routes: Routes = [
  { path: 'multisearch/:searchQuery', component: SearchResultsComponent , 
  	runGuardsAndResolvers: 'always'},
  {path: 'movieDetail/:movieId', component: MovieDetailComponent , 
  	runGuardsAndResolvers: 'always'},
  {path: 'tvDetail/:tvId', component: TvDetailComponent , 
  	runGuardsAndResolvers: 'always'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    onSameUrlNavigation: 'reload',
    enableTracing:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
