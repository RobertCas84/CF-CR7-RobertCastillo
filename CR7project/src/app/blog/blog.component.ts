import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations } from '../destinations';
import { DestinationsService } from '../destinations.service';
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  destinations=destinations
  constructor(private route: ActivatedRoute, private destinationsService: DestinationsService) { }

  ngOnInit(): void {
  }

}
