import { Component, OnInit } from '@angular/core';
import { SiteService } from 'app/site/site.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  name: any;
  email: any;
  tel: any;
  name2: any;
  email2: any;
  tel2: any;
  loading: boolean;
  success: boolean;
  public mask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private siteService: SiteService    
  ) {}

  ngOnInit() {
    this.loading = true;
    this.success = true;
  }

  anchorForm() {
    var url = location.href;               
    location.href = "#"+"contactForm";
    history.replaceState(null,null,url);
  }

  postForm(form) {
    
    this.loading = false;

    let contact = {
      "name": form.name ? form.name : form.name2,
      "email": form.email ? form.email : form.email2,
      "tel": form.tel ? form.tel : form.tel2
    };
    
    this.siteService.sendContact(contact)
    .subscribe(
      success => {
        this.success = false;
        this.loading  = true;
      },
      error => {
        this.loading = true;
      }
    );
  }  
}