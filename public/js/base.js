const nome = "Marcelo Eltz";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "Programador"

    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
]

function AlterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(NovoNome) {
    nome2 = NovoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function ImprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function ImprimirPessoas() {
    console.log("-------- IMPRIMIR PESSOAS -------");
    pessoas.forEach((item)=> {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho);

    })
}

ImprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});


//ImprimirPessoa(pessoaDefault);

//ImprimirPessoa({
    //nome: "Maria Silva",
   // idade: "25",
  //  trabalho: "UX/UI Designer"
//});

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//AlterarNome();