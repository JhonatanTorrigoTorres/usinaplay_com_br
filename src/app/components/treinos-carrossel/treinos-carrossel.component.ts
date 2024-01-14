import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treinos-carrossel',
  templateUrl: './treinos-carrossel.component.html',
  styleUrls: ['./treinos-carrossel.component.scss'],
})
export class TreinosCarrosselComponent  implements OnInit {
  @Input() tipo: string = '';
  @Input() quantidade_treinos: { id: string; imagem: string; nome: string }[] = [];
  @Input() quantidade_programas: { id: string; imagem: string; nome: string; concluido: boolean }[] = [];

  constructor() { }

  ngOnInit() {
  }

  novotreino() {
    console.log('Clicou');
  }

  acessatreino(id: string) {
    console.log('Acessou treino', id);
  }

  acessaprograma(id: string) {
    console.log('Acessou programa', id);
  }
}
