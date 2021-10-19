import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frases: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/frases.json")
      .subscribe(
        result => {
          this.frases = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

}
