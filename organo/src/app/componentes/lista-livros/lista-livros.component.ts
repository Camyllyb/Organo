import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent, CommonModule],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();
  generosVisibility: Map<string, boolean> = new Map();

  ngOnInit() {    
        this.livrosPorGenero = new Map();
        livros.forEach(livro => {
          const generoId = livro.genero.id
          if(!this.livrosPorGenero.has(generoId)) {
            this.livrosPorGenero.set(generoId, []);
          }
          this.livrosPorGenero.get(generoId)?.push(livro); //Operador de operação segura
        });

      this.generos = [
      {
          id: 'romance',
          value: "Romance",
          livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
          id: 'misterio',
          value: 'Mistério',
          livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
          id: 'fantasia',
          value: 'Fantasia',
          livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
          id: 'ficcao-cientifica',
          value: 'Ficção Científica',
          livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
          id: 'tecnicos',
          value: 'Técnicos',
          livros: this.livrosPorGenero.get("tecnicos") ?? []
      }
      ];

      // Inicializar todos os gêneros como visíveis
      this.generos.forEach(genero => {
        this.generosVisibility.set(genero.id, true);
      });
  }

  toggleGeneroVisibility(generoId: string) {
    // Ocultar todos os gêneros
    this.generosVisibility.forEach((_, key) => {
      this.generosVisibility.set(key, false);
    });
    // Mostrar apenas o gênero clicado
    this.generosVisibility.set(generoId, true);
  }

  isGeneroVisible(generoId: string): boolean {
    return this.generosVisibility.get(generoId) ?? true;
  }

  mostrarTodos() {
    this.generosVisibility.forEach((_, key) => {
      this.generosVisibility.set(key, true);
    });
  }

  ocultarTodos() {
    this.generosVisibility.forEach((_, key) => {
      this.generosVisibility.set(key, false);
    });
  }
}
