import { Injectable } from '@angular/core';

import { Contactlist } from './contactlist';
import { Observable,throwError } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactService {

  selectedContact: Contactlist;
  contacts: Contactlist[];
   baseURL = 'http://localhost:3000/contact';

  
  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http: HttpClient){};

  //constructor(private http: Contactlist) { }

  // postContact (emp: Contactlist) : Observable<any> {
    
  //   return this.http.post(this.baseURL, emp);
  // }


  postContact(data: Contactlist): Observable<any> {
    let API_URL = `${this.baseURL}/contact`;
    return this.http.post(this.baseURL, data)
      
  }




  getContactList() {
    return this.http.get(this.baseURL);
  }



  
  putContact(emp: Contactlist) {
    return this.http.patch(this.baseURL + `/${emp._id}`, emp);
  }

  deleteContact(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
