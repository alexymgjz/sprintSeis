import {Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})

export class HombreComponent implements OnInit {
  @Input() decoradorFrasesHombre: any;
  mostrarHistoria :boolean=false;
  ocultame: boolean=true;
  constructor() {

  }


  ngOnInit() {

  }
  empesar(){
    this.mostrarHistoria=true;
    this.ocultame=false;
  }
}

