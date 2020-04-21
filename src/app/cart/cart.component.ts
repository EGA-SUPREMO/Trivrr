import { Component, OnInit } from '@angular/core';
import { FormBuilder } from  '@angular/forms';

import { WordSetService } from '../wordSet.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: WordSetService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getCurrentWordSet();
  }

  onSubmit(costumerData) {
    //Process the data
    console.warn('Your order has been sumbitted', costumerData);

    this.items = this.cartService.clearCurrentWordSet();
    this.checkoutForm.reset();
  }
}