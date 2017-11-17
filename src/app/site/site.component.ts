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
      this.siteService.sendContact(form)
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