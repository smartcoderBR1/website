import { Component, OnInit } from '@angular/core';
import { SiteService } from 'app/site/site.service';

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
  public mask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private siteService: SiteService    
  ) {}

  ngOnInit() {
    this.loading = true;
  }

  anchorForm() {
    var url = location.href;               
    location.href = "#"+"contactForm";
    history.replaceState(null,null,url);
  }

  postForm(form) {
    console.log(form);

    this.loading = false;
    

      this.siteService.sendContact(form)
      .subscribe(
        success => {
          console.log('deu certo')
          this.loading  = true;
          this.name     = null;
          this.email    = null;
          this.tel      = null;
        },
        error => {
          console.log('algo deu errado')
          this.loading = true;
        }
      );
    }

  
}
