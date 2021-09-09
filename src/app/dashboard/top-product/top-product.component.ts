import { Component } from '@angular/core';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent {
  topProducts = [
    {name: 'Basic Tees', percent: '55%'},
    {name: 'Custom Short Pants', percent: '31%'},
    {name: 'Super Hoodies', percent: '14%'},
  ]
}
