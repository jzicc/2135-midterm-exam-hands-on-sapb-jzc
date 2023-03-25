import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  myform: any;

  ngOnInit(): void {
    this.myform = new FormControl();
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
    }
  }
}
