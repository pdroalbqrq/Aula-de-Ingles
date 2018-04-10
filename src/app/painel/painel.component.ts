import { Component, OnInit, EventEmitter, Output,OnDestroy,OnChanges } from '@angular/core';
import Frase from '../compartilhados/frase.model'
import { FRASES } from './frases-mock'
import { ProgressoComponent } from '../progresso/progresso.component'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnDestroy,OnChanges {


  
  ngOnChanges(): void {

  }

  public frases: Frase[] = FRASES
  public pergunta: string = 'Traduza a frase:'
  public resposta: string = ""

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.proximaFrase()
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    console.log('Componente painel foi destruído')
  }

  public atualizaResposta(reposta: Event): void {
    this.resposta = (<HTMLInputElement>reposta.target).value
  }
  private proximaFrase(): void {
    this.rodadaFrase = this.frases[this.rodada]
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //Adiciona mais 1 ao indice 'this.frases'
    
      this.rodada++


      if (this.rodada === this.frases.length){
         this.encerrarJogo.emit('Vitória')
      }
      //atualiza o objeto rodadaFrase
      
      this.progresso = this.progresso + (100 / this.frases.length)
       
 
      this.proximaFrase()
      //limpar a resposta
      this.resposta = ""

    } else {
      this.tentativas--
      this.resposta = ""
      if (this.tentativas == -1) {
        this.encerrarJogo.emit('Derrota')
      }
    }
  }
}
