import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  articles: Array<string>;
  
  constructor() { }

  ngOnInit(): void {
    this.articles = localStorage.getItem('articles').split('|')
  }

}
