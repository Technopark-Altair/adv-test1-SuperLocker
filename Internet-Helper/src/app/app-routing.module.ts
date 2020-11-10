import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ArticleComponent } from './main-content/article/article.component';
import { PagesComponent } from './main-content/pages/pages.component';

const routes: Routes = [
  { path: 'tutor', component: ArticleComponent },
  { path: 'news', component: PagesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
