import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor() { }

  async fetchData(): Promise<any> {
    try {
      const response = await axios.get('http://optimapetrol.ge/');
      return response.data; // Assuming the data you want to fetch is in JSON format
    } catch (error) {
      console.error('Error fetching data ვერ გაიშვა რესპონსმა, ვერ აიღო ინფორმცია:' , error);
      return null;
    }
  }
}
