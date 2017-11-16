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
  public mask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private siteService: SiteService,
    
  ) { }

  ngOnInit() {}

  anchorForm() {
    var url = location.href;               
    location.href = "#"+"contactForm";
    history.replaceState(null,null,url);
  }

  postForm(form) {
    console.log(form);

      this.siteService.sendContact(form)
      .subscribe(
        success => {
          console.log('deu certo')
  
        },
        error => {
          console.log('algo deu errado')
        }
      );
    }

  
}
