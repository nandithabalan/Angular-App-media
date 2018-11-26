import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HttpClientModule }    from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { MatProgressSpinnerModule,MatButtonModule,
  MatProgressBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule } from '@angular/material';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';


@NgModule({
	
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    MovieDetailComponent,
    TvDetailComponent,
  ],
  imports: [
  BrowserAnimationsModule,
  ScrollingModule,
  CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
	  MatDialogModule,
	  MatFormFieldModule,
	  MatIconModule,
	  MatInputModule,
	  MatListModule,
	  MatMenuModule,
	  MatSidenavModule,
	  MatSelectModule,
	  MatSlideToggleModule,
	  MatSnackBarModule,
	  MatTabsModule,
	  MatToolbarModule,
	  MatTooltipModule,
	  MatProgressBarModule
	  
  ],
  exports : [
  	 MatProgressSpinnerModule,
  	 MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
