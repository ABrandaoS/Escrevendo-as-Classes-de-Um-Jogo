class classeHeroi{
	constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
      this.ataque
      
      if (this.tipo == "mago"){
      	this.ataque = "magia"
      } else if (this.tipo == "guerreiro"){
      	this.ataque = "espada"
      } else if (this.tipo == "monge"){
      	this.ataque = "artes marciais"
      } else if (this.tipo == "ninja"){
      	this.ataque = "shuriken"
      } else {
      	this.ataque = "escolha novamente o tipo"
      }      
    }
    
    atacar(){
    	console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
    }      
}


let mago = new classeHeroi("Merlin", 999, "mago")
mago.atacar()

let guerreiro = new classeHeroi("Vulcano", 100, "guerreiro")
guerreiro.atacar()

let monge = new classeHeroi("Padre", 250, "monge")
monge.atacar()

let ninja = new classeHeroi("Naruto Uzumaki", 1, "ninja")
ninja.atacar()