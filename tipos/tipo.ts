// * string
let nome = "João";
console.log(nome);
// nome = 28

// * numbers
let idade = 27;
console.log(idade);
// idade = 'Ana'

// * boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// * explicit types
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);

// * arrays
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies);
console.log(typeof hobbies);

// * tuples
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// * enums
enum Cor {
  Cinza, //0
  Verde = 100, //1
  Azul = 10, //2
  Laranja,
  Amarelo,
  Vermelho = 100,
}
let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);

// * any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// * functions
function retornaMeuNome(): string {
  return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}
digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(2, 5));

// * type function
let calculo: (x: number, y: number) => number;
calculo = multiplicar;
calculo(1, 2);

// * objects
let usuario = {
  nome: "João",
  idade: 27,
};
console.log(usuario);

// * Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => void;
};

// ! Desafio 01
let funcionario: Funcionario = {
  supervisores: ["Lucas", "Leandro"],
  baterPonto: (hora: number) =>
    hora <= 8 ? console.log("Ponto normal") : console.log("Fora do horário"),
};
funcionario.baterPonto(12);
// ! Desafio 01

// * Union types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);

// * Checking types
let valor = 30;
if (typeof valor === "number") {
  console.log("É um number!");
} else {
  console.log(typeof valor);
}

// * Type never
function falha(msg: string) {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: -1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome");
    }

    if (this.preco <= 0) {
      falha("Preco inválido");
    }
  },
};

// produto.validarProduto();

// * Opcionais com tipo 'null'
let alturaOpcional: null | number = 12;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "123124",
  tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

// ! Desafio 02
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
// ! Desafio 02
