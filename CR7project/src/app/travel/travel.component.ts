import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations } from '../destinations';
import { DestinationsService } from '../destinations.service';
@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  destinations=destinations;
  constructor(private route: ActivatedRoute, private blogService: DestinationsService) { }

  ngOnInit(): void {
  }

}
