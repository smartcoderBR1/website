import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  public mask = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
  
  constructor() { }

  ngOnInit() {

   
  }

  anchorForm() {
    var url = location.href;               
    location.href = "#"+"contactForm";
    history.replaceState(null,null,url);
  }

  postForm(form) {
    console.log(form);
  }
}
