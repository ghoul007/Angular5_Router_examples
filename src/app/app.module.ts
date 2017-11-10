import { AuthGuardsService } from './auth-guards.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'article', component: ArticleComponent, canActivate: [ AuthGuardsService ] ,
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
    ArticleDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthGuardsService,  AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
