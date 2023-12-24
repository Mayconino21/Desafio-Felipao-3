console.log("Bem-Vindo à Terra Média")

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usando magia";
        break;
      case "guerreiro":
        ataque = "usando espada";
        break;
      case "monge":
        ataque = "usando artes marciais";
        break;
      case "ninja":
        ataque = "usando shuriken";
        break;
      default:
        ataque = "atacou";
    }
    console.log(`Qual o seu nome? ${this.nome}`)
    console.log(`Qual a sua idade? ${this.idade}`)
    console.log(`Qual o seu personagem? ${this.tipo}`)
    console.log(`O ${this.tipo} atacou ${ataque}`);
  }
}

// Exemplo de utilização da classe
const heroiExemplo = new Heroi("Maycon", 30, "mago");
heroiExemplo.atacar();
