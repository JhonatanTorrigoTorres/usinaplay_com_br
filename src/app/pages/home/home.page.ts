import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public usuario = {
    id: '',
    nome: '',
    imagem: '',
    nivel: ''
  };

  public notificacoes = [
    {
      titulo: '',
      conteudo: ''
    },
  ];

  public planilhas = {
    treino: 'PERSONAL ONLINE',
    treinos: [
      {
        id: '',
        imagem: '',
        nome: ''
      }
    ],
    programa: 'PROGRAMAS',
    programas: [
      {
        id: '',
        imagem: '',
        nome: '',
        concluido: true,  
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
    this.consultaCliente();
    this.consultaNotificacao();
    this.consultaTreinos();
    this.consultaProgramas();
  }

  async consultaCliente() {
    const consultaCliente = await getDocs(collection(db, "usuarios_app"));
    consultaCliente.forEach((doc) => {
      const data = doc.data();
      this.usuario.id = doc.id;
      this.usuario.nome = data['nome'];
      this.usuario.nivel = data['nivel'];
      this.usuario.imagem = data['imagem'];
      console.log(`${doc.id} => ${JSON.stringify(data)}`);
    });
  }

  async consultaNotificacao() {
    const consultaNotificacao = await getDocs(collection(db, "notificacoes"));
    consultaNotificacao.forEach((doc) => {
      const data = doc.data();
      if (Object.keys(data).length > 0) {
        this.temNotificacao = true;
        this.notificacoes[0].titulo = data['titulo'];
        this.notificacoes[0].conteudo = data['conteudo'];
      } else {
        this.temNotificacao = false;
      }
      console.log(`${doc.id} => ${JSON.stringify(data)}`);
    });
  }

  async consultaTreinos() {
    const consultaTreinos = await getDocs(collection(db, "usuarios_app/tyliftrQw8uttSbbmNdm/treinos"));

    this.planilhas.treinos = [];

    consultaTreinos.forEach((doc) => {
      const data = doc.data();
      if (Object.keys(data).length > 0) {
        const treino = {
          id: doc.id,
          nome: data['nome'],
          imagem: data['imagem']
        };
        this.planilhas.treinos.push(treino);
      } else {
        this.planilhas.treinos = [];
        console.log('Nenhum treino encontrado.');
      }
      console.log(`${doc.id} => ${JSON.stringify(data)}`);
    });
  }

  async consultaProgramas() {
    const consultaProgramas = await getDocs(collection(db, "usuarios_app/tyliftrQw8uttSbbmNdm/programas"));

    this.planilhas.programas = [];

    consultaProgramas.forEach((doc) => {
      const data = doc.data();
      if (Object.keys(data).length > 0) {
        const programa = {
          id: doc.id,
          nome: data['nome'],
          imagem: data['imagem'],
          concluido: data['concluido']
        };
        this.planilhas.programas.push(programa);
      } else {
        this.planilhas.programas = [];
        console.log('Nenhum programa encontrado.');
      }
      console.log(`${doc.id} => ${JSON.stringify(data)}`);
    });
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
