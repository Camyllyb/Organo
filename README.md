![Thumbnail](./thumb.png)

# Organo

Organo é um aplicativo para organização de leituras, permitindo listar livros com informações como título, autor, imagem e gênero literário.

Este projeto foi desenvolvido como parte do curso **Angular 19** da Alura.

## 🔨 Funcionalidades

- **Listagem de livros**: Exibe uma lista de livros agrupados por gênero literário, mostrando imagem, título e autor.
- **Filtro por gênero**: Implementação de condições para exibir apenas livros de um gênero específico quando selecionado, proporcionando uma experiência mais intuitiva para o usuário.
- **Controle de visibilidade**: Botões para mostrar e ocultar todos os livros simultaneamente.

## ✔️ Tecnologias e Técnicas Utilizadas

- **Angular 19**: Framework principal para construção da aplicação.
- **Angular CLI**: Ferramenta para criação e gerenciamento do projeto.
- **Componentização**: Estrutura modular e reutilizável para melhor organização.
- **Diretiva ngClass**: Aplicação dinâmica de classes CSS para estilização condicional.
- **Templates**: Uso de bindings (one-way), eventos e interpolação para interfaces dinâmicas e responsivas.
- **Controle de fluxo**: Utilização de @if e @for para exibição e iteração de elementos.
- **Inputs com Signals**: Comunicação eficiente entre componentes utilizando a API de Signals.

## 📁 Design no Figma

Acesse o design do projeto no Figma:

🔗 [Visualizar no Figma](https://www.figma.com/community/file/1459296356400633021)

## 🛠️ Como rodar o projeto

### Pré-requisitos

- Node.js versão 18 ou superior
- npm ou yarn

### Passos

1. **Instale as dependências**:
```bash
npm install
```

2. **Execute o projeto em modo desenvolvimento**:
```bash
npm start
```

O servidor estará disponível em `http://localhost:4200`

3. **(Opcional) Acesse com a URL customizada**:
Para acessar através da URL `organo.app.com.br:4200`, adicione a seguinte linha ao seu arquivo `/etc/hosts`:
```
127.0.0.1 organo.app.com.br
```

---

**Projeto de Estudo**: Curso Angular 19 - Alura