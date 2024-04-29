import { Component, OnInit } from '@angular/core';
import { ScraperService } from './scraper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fetchedData: any;

  constructor(private scraperService: ScraperService) {}

  ngOnInit() {
    this.fetchDataFromWebpage();
  }

  async fetchDataFromWebpage() {
    this.fetchedData = await this.scraperService.fetchData();
  }
}
