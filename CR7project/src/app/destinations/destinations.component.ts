import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { destinations } from '../destinations';


// import { DestinationsService } from '../destinations.service';
@Component({
  selector: 'destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  destinations;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(destinations) {
    window.alert('Your destination has been added to the cart!');
    this.cartService.addToCart(destinations);
  }
  ngOnInit (){
  this.route.paramMap.subscribe(params => {
    this.destinations = destinations[+params.get('destinationId')];
     });

}
}