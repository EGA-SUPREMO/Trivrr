import { Component } from '@angular/core';

import { WordSetService } from '../wordSet.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  wordSet;

  constructor(private wordSetService: WordSetService) { }

  ngOnInit() {
    this.wordSet = this.wordSetService.getWordSet();
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/