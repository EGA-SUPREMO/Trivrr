import { Component, OnInit } from '@angular/core';
import { WordSetService } from '../wordSet.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  constructor(
    private cartService: WordSetService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getWordSet();
  }

}