import {Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})

export class HombreComponent implements OnInit {
  @Input() decoradorFrasesHombre: any;

  constructor() {
    console.log("Componente Hombre2222: ", this.decoradorFrasesHombre);
  }


  ngOnInit() {
    console.log("Componente Hombre: ", this.decoradorFrasesHombre);
  }

}
