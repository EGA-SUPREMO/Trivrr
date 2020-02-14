import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  constructor(
    private cartService: WordsService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getWords();
  }

}