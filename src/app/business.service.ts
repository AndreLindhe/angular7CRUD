import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = "http://localhost:4000/business";

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_Name: person_name,
      business_Name: business_name,
      business_gst_Number: business_gst_number
    };
    console.log(obj);
    this.http.post(this.uri + '/add', obj).subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this.http.get(this.uri);
  }

  editBusiness(id) {
    const input = this.uri + '/edit/' + id;

    return this.http.get(input);

  }

  deleteBusiness(id) {
    return this.http.get(this.uri + '/delete/' + id);
  }

  updateBusiness(id, person_name, business_name, business_gst_number) {
    const obj = {
      person_Name: person_name,
      business_Name: business_name,
      business_gst_Number: business_gst_number
    };
    this.http.post(this.uri + '/update/' + id, obj).subscribe(res => {
      console.log('Done');
    });
  }

}
