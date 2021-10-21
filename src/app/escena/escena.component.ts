import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() decoradorFrasesEscena: any;
  step: number = 0;
  valor1: number = 0 ;
  constructor() { }

  ngOnInit(): void {

  }

  disminuir() {
     if (this.step>0){
       this.step--
     }else {
       this.step=0;
     }
  }

  aumentar() {
   if (this.step <= this.valor1 && this.step < this.decoradorFrasesEscena.length-1 ){
       this.step++
     }
      this.valor1=this.decoradorFrasesEscena.length-1

  }


}
