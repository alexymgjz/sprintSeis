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
  valor: number = 0 ;


  constructor() { }

  ngOnInit(): void {
    //this.valor1=this.decoradorFrasesEscena.length
  }

  disminuir() {
    this.step--;
    // if (this.step>0){
    //   this.step--
    // }
  }

  aumentar() {
    this.step++
    // if (this.step < this.valor1 ){
    //   this.step++
    // }
    //   this.valor1=this.decoradorFrasesEscena.length-1

  }

  trackByItems(index: number, item: any): number { return item.id; }
}
