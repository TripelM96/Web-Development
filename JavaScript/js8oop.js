// criar classe Pessoa
class Pessoa {
    // properties / variáveis
    nome;
    cidade;
    pais = "Portugal";

    constructor(nome,cidade,pais) {
        this.nome=nome;
        this.cidade=cidade;
        this.pais=pais;
    }

    comer() {
        console.log(`O ${this.nome} está a comer!`)
    }

}

// Instanciar um objecto
const pessoa1=new Pessoa("Pedro Remoaldo","Porto","Portugal");
console.log(pessoa1); // {nome: 'Pedro Remoaldo', cidade: 'Porto', pais: 'Portugal'}
console.log(pessoa1.nome); // Pedro Remoaldo
pessoa1.comer(); // O Pedro Remoaldo está a comer

const pessoa2=new Pessoa();
console.log(pessoa2); // {nome: undefined, cidade: undefined, pais: undefined}
pessoa2.nome="Luísa Todi";
console.log(pessoa2); // {nome: 'Luísa Todi', cidade: undefined, pais: undefined}

// inheritance
class Formando extends Pessoa {
    curso;
    // propriedade privada
    static #quantosFormandos=0;
    constructor(nome,cidade,pais,curso) {
        // this.nome=nome;
        // this.cidade=cidade;
        // this.pais=pais;
        super(nome,cidade,pais);
        this.curso=curso;
        Formando.#quantosFormandos++;
    }
    // method override
    comer() {
        super.comer();
        console.log(`O ${this.nome} está a frequentar o curso '${this.curso}'`);
    }

    static get quantosFormandos() {
        return Formando.#quantosFormandos;
    }
}

let formando1=new Formando("António Couceiro", "Leiria", "Portugal", "HTML e CSS");
console.log(formando1); // {nome: 'António Couceiro', cidade: 'Leiria', pais: 'Portugal', curso: 'HTML e CSS'}
formando1.comer();
// O António Couceiro está a comer!
// O António Couceiro está a frequentar o curso 'HTML e CSS'
formando1.nome="Marie Curie";
console.log(formando1); // {nome: 'Marie Curie', cidade: 'Leiria', pais: 'Portugal', curso: 'HTML e CSS'}

console.log(formando1.quantosFormandos); // undefined
console.log(Formando.quantosFormandos); // 1

let formando2=new Formando("Inês Medeiros", "Lisboa", "Portugal", "Marketing Digital");
console.log(Formando.quantosFormandos); // 2