import { Component } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito(): void {
    this.livro.favorito =!this.livro.favorito;
  }

  livro: Livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    genero: "Ficção literária",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKr2_UKmp7AxNqa27eve0vaH-6XuzjxsUFOXf4p4TeR06q2HN5gtPQUgU5Z3JUnGZUs09uzvnGDt8_0Yc83r0BpzcLYrDaMLQSc7OHO8Q&s=10"
  };

}
