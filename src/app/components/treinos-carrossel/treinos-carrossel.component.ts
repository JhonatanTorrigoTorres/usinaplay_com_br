import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treinos-carrossel',
  templateUrl: './treinos-carrossel.component.html',
  styleUrls: ['./treinos-carrossel.component.scss'],
})
export class TreinosCarrosselComponent  implements OnInit {
  @Input() tipo: string = '';
  @Input() quantidade_treinos: { id: number; imagem: string; nome: string }[] = [];
  @Input() quantidade_programas: { id: number; imagem: string; nome: string; concluido: boolean }[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.tipo);
  }

  novotreino() {
    console.log('Clicou');
  }

  acessatreino(id: number) {
    console.log('Acessou treino', id);
  }

  acessaprograma(id: number) {
    console.log('Acessou programa', id);
  }
}
