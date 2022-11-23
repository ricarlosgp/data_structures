

/* 
Estruturando dados com Objetos

VER TÓPICOS RELACIONADOS

Descrição
Nessa aula aprenderemos sobre:
[] Estruturas de dados: Objetos
[] object literal - precisamos declarar uma variável e atribuir manulamente os valores para essa variável. No exemplo abaixo criamos uma variável constante de pacients e todos objeto deverá estar entre chaves e ter uma variável declarada
[] for..of - 

  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes

  OBS: dentro de uma array eu posso inserir qualquer coisa: "string", number, booleam e até mesmo objetos{}.
*/

alert(`Olá mundo! Me chamo ricarlosgp@gmail.com e sou estudante de desenvolvimento web front-end. Nesse script estou cadastrando uma lista de pacientes contendo: name, age, weight, height e exibindo apenas o name de cada um.
Abraços!`)

const patients = [//declarei uma variável constant de patients que recebeu um arrey e dentro desse arrey há três objetos e dentro desses objetos há propriedades que são: name, age, weight e height.
    {
      name: "Ricarlos",
      age: 20,
      weight: 100,
      height: 190,
    },
    {
      name: "Guimarães",
      age: 27,
      weight: 70,
      height: 170,
    },
    {
      name: "Pereira",
      age: 42,
      weight: 90,
      height: 180,
    },
  ]
  
  let patientsNames = [] //declarei uma variável de controle chamada let patientesNames que recebe uma ARRAY VAZIO
  
  //for ou para (a nova variável criada let patient of/de patients) { faça: }
  for(let patient of patients) {

    //pegue patientsNames que recebeu um array vazio e faça uma funionalidade chamada .push ao qual é atribuída a um array e coloque o (patient.name) dentro do escopo for. Esse patient.name é: patient veio lá da variável for ao qual foi criado o let patient e o .name é a propriedade do objeto ou seja vai exibir em tela todos os name do objeto.
    patientsNames.push(patient.name)
  }
  
  alert(patientsNames) //exibir em tela o array patientsNames que será apenas o name dos objetos