import { Component, OnInit } from '@angular/core';
import Business from '../business';
import { BusinessService } from '../business.service';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {

  businesses: Business[];
  constructor(private bs: BusinessService, private router: Router) { }

  getDBStuff() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  ngOnInit() {
    this.router.events.subscribe( (event: Event) => {
          if (event instanceof NavigationEnd) {
              this.getDBStuff();
          }
      });


    this.getDBStuff();
  }



  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => console.log('Deleted'));

    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

}
