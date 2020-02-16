import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordSetService {

  currentWordSetet = [];

  addWordSet(wordSet) {
    this.currentWordSet.push(wordSet);
  }
  getCurrentWordSet() {
    return this.currentWordSet;
  }
  clearCurrentWordSet() {
    this.currentWordSet = [];
    return this.currentWordSet;
  }

  getWordSet() {
    return this.http.get('/assets/temp.json');
  }
  constructor(
    private http: HttpClient
  ) { }

}