import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public usuario = {
    nome: 'Jhonatan Torres',
    imagem: 'imagem_usuario.png',
    nivel: 'Roxo'
  };

  public dados = {
    treino: 'PERSONAL ONLINE',
    treinos: [
      {
        id: 1,
        imagem: 'imagem_yoga.png',
        nome: 'YOGA EXPRESS'
      },
      {
        id: 2,
        imagem: 'imagem_supino.png',
        nome: 'SUPINO RETO'
      }
    ],
    programa: 'PROGRAMAS',
    programas: [
      {
        id: 1,
        imagem: 'imagem_treino.png',
        nome: 'LEVANTAMENTO DE PESO',
        concluido: false
      },
      {
        id: 2,
        imagem: 'imagem_supino.png',
        nome: 'SUPINO RETO',
        concluido: true
      },
      {
        id: 3,
        imagem: 'imagem_yoga.png',
        nome: 'YOGA EXPRESS',
        concluido: false
      },
    ],
    conteudo: 'CONTEÚDOS'
  };
  constructor(
    private navCtrl: NavController,
  ) { }


  navigateTo(tipo: string) {

    switch (tipo) {
      case 'Home':
        // this.navCtrl.navigateForward('/home');
        console.log('Foi para', tipo)
        break;

      case 'Treinos':
        // this.navCtrl.navigateForward('/treinos');
        console.log('Foi para', tipo)
        break;

      case 'Ajuda':
        // this.navCtrl.navigateForward('/ajuda');
        console.log('Foi para', tipo)
        break;

      case 'Sair':
        // this.navCtrl.navigateForward('/sair');
        console.log('Foi para', tipo)
        break;
    }
  }

  botoesTopo(tipo: string){
    switch (tipo) {
      case 'corpo':
        // this.navCtrl.navigateForward('/meu-corpo');
        console.log('Foi para', tipo)
        break;

      case 'objetivos':
        // this.navCtrl.navigateForward('/objetivos-conquistas');
        console.log('Foi para', tipo)
        break;
    }
  }
}
