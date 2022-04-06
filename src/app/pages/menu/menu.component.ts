// import { Component, OnInit } from '@angular/core';
// import { OrderDetailsService } from 'src/app/services/order-details.service';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {

//   foodData: any;
//   singleItem: any;

//   constructor(private service: OrderDetailsService) { }

//   ngOnInit(): void {
//     this.foodData = this.service.foodDetails;
//     console.log(this.foodData);
//     for (let index = 0; index < this.foodData.length; index++) {
//       this.singleItem.ad
//     }
//   }

// }

import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    console.log(this.foodData);
  }

}
