// * noEmitOnError
let canal: string = "Gaveta";
let inscritos: number = 610234;

// canal = inscritos;
console.log(`Canal: ${canal}`);

// * noImplicityAny
function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

// * strictNullChecks, noUnusedParameters, noUnusedLocals
function saudar(isManha: boolean) {
  //   let naoUsado;
  let saudacao: string;

  if (isManha) {
    saudacao = "Bom dia!";
  } else {
    saudacao = "Boa tarde!";
  }

  return saudacao;
}
