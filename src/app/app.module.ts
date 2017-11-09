import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';


const appRoutes: Routes = [
  {path: 'article', component: ArticleComponent,
  children: [
    {path: '', component: ArticleListComponent},
    {path: ':articleId', component: ArticleDetailsComponent}
  ]},
  {path: '**', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [   {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
