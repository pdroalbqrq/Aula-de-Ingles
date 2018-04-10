import { Component, OnChanges, OnInit, Input } from '@angular/core';

import Coracao from '../compartilhados/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {


  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)

  }
  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length){""
      let i = this.coracoes.length - this.tentativas
      this.coracoes[i - 1].cheio = false
    }
  }
  ngOnInit() {

  }

}
