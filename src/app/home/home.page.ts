import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfil = {
    foto:`https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png`  ,
    nome: ' Miguel do grau ',
    insta: '@mimi244',
    formado: ' art 244',
    cidade: ' Tatui/ sp',
    biofrase: ' e os 4mm  ',

    bio: [
      'Programador com mais de 5 anos de java, Java é vida   ',
      


    ]




  }


amigosp= [
  {
    nome: ' Fefe',
    foto:`https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png`,
    bio: 'Nois e foda  '
  },
  {
    nome: ' Mama',
    foto:`https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png` ,
    bio: ' slv sllv  '
  },
  {
    nome: ' Vivi',
    foto:`https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-256.png` ,
    bio: ' é 171 '
  },


]

  constructor() { }
}
