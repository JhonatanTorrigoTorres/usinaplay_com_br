import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public usuario = {
    nome: 'Jhonatan Torres',
    imagem: 'imagem_usuario.png',
    nivel: 'Roxo'
  };

  public notificacoes = [
    {
      nome: 'Treinar supino hoje!',
      conteudo: 'Olá, hoje você tem treino de supino, não esqueça!'
    },
    {
      nome: 'Treinar yoga hoje!',
      conteudo: 'Olá, hoje você tem treino de yoga, não esqueça!'
    }
  ];

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

  public temNotificacao: boolean = false;

  constructor(
    private navCtrl: NavController,
    private location: Location
  ) { }

  ngOnInit() {
    if (this.notificacoes.length > 0) {
      this.temNotificacao = true;
      console.log('Há notificações!');
    } else {
      this.temNotificacao = false;
      console.log('Não há notificações!');
    }
  }

  reloadPage() {
    this.location.replaceState('/home');
    window.location.reload();
  }

  navigateTo(tipo: string) {

    switch (tipo) {
      case 'Home':
        this.reloadPage();
        console.log('Foi para', tipo);
        break;

      case 'Treinos':
        // this.navCtrl.navigateForward('/treinos');
        console.log('Foi para', tipo);
        break;

      case 'Ajuda':
        // this.navCtrl.navigateForward('/ajuda');
        console.log('Foi para', tipo);
        break;

      case 'Sair':
        // this.navCtrl.navigateForward('/sair');
        console.log('Foi para', tipo);
        break;
    }
  }

  botoesTopo(tipo: string) {
    switch (tipo) {
      case 'corpo':
        // this.navCtrl.navigateForward('/meu-corpo');
        console.log('Foi para', tipo);
        break;

      case 'objetivos':
        // this.navCtrl.navigateForward('/objetivos-conquistas');
        console.log('Foi para', tipo);
        break;

      case 'notificacao':
        if (this.temNotificacao) {
          this.notificacoes = [];
          this.temNotificacao = false;
        }
        // this.navCtrl.navigateForward('/notificacoes');
        console.log('Foi para', tipo);
        break;
    }
  }
}
