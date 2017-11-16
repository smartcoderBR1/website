import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { TextMaskModule } from 'angular2-text-mask';
import { SiteService } from './site/site.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule,
    HttpModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
