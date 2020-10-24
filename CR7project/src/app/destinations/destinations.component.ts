import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations } from '../destinations';
@Component({
  selector: 'destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  destinations;
  constructor(private route: ActivatedRoute) { }

  ngOnInit (){
  this.route.paramMap.subscribe(params => {
    this.destinations = destinations[+params.get('destiantionId')];
     });

}
}