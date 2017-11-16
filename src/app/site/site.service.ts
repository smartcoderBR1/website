import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SiteService {

  constructor(private http: Http) {}
  
  sendContact(form) {
    
    return this.http.post('https://protected-scrubland-50704.herokuapp.com/post-user', form)
      .map(response => true)

  }

}
