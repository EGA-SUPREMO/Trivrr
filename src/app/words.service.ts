import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  currentWords = [];

  addWord(product) {
    this.currentWords.push(product);
  }
  getCurrentWords() {
    return this.currentWords;
  }
  clearCurrentWords() {
    this.currentWords = [];
    return this.currentWords;
  }

  getWords() {
    return this.http.get('/assets/temp.json');
  }
  constructor(
    private http: HttpClient
  ) { }

}