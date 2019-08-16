import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.scss']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService, private router: Router, private zone: NgZone) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      person_Name: ['', Validators.required],
      business_Name: ['', Validators.required ],
      business_gst_Number: ['', Validators.required ]
    });
  }

  addBusiness(person_name, business_name, business_gst_number) {
    this.bs.addBusiness(person_name, business_name, business_gst_number);
    this.zone.run(() => this.router.navigate(['business']));
  }

  ngOnInit() {

  }

}
