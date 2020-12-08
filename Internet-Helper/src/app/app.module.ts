import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './main-content/pages/pages.component';
import { ArticleComponent } from './main-content/article/article.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent, FormComponent, PagesComponent, ArticleComponent,ProgressBarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, NgbModule, NgbPaginationModule, NgbAlertModule, FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
