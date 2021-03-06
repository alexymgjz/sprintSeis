

import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() decoradorFrasesEscena: any;
  step: number = 0;
  img:string= '0.jpg';
  constructor() { }

  ngOnInit(): void {
  }


  disminuir() {
   if (this.step > 0){
     this.step--
     this.img=this.step+'.jpg'
   }
  }

  aumentar() {
    if (this.step < this.decoradorFrasesEscena.length -1){
      this.step++
      this.img=this.step+'.jpg'
    }
  }

}
