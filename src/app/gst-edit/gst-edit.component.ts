
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder,
    private zone: NgZone)  {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        person_Name: ['', Validators.required ],
        business_Name: ['', Validators.required ],
        business_gst_Number: ['', Validators.required ]
      });
    }

    updateBusiness(person_Name, business_Name, business_gst_Number) {
      this.route.params.subscribe(params => {
        this.bs.updateBusiness(params['id'], person_Name, business_Name, business_gst_Number);
      });
      this.zone.run(() => this.router.navigate(['/', 'business']));
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }
}
