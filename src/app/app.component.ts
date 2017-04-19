import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Welcome to Instagram Search";
  linkfirst = 'https://api.instagram.com/v1/tags/'
  linksecond = '/media/recent?access_token=2360757869.1c5f91c.5487d58ee14e4168ae9edfe91bec427f';
  http: Http;
  giphies = [];
  constructor(http: Http) { 
    this.http = http; 
  }
  getImages(searchTerm: HTMLInputElement): void { 
    var apiLink = this.linkfirst + searchTerm.value + this.linksecond;
  	this.http.request(apiLink).subscribe((res: Response) => { 
  	   this.giphies = res.json().data;
  	   console.log(res.json()); 
  	});
  }
}

