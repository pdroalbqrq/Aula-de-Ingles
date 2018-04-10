import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { PainelComponent } from '../painel/painel.component'
@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit,OnChanges {
  
  
  @Input('auxiliarProgresso') public progresso: number = 0
 
  ngOnChanges(): void {

  }
 

  constructor() {}
  
  ngOnInit() {
   
  }
}
