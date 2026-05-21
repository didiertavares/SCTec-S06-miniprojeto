const input = require('prompt-sync')()

// CRIAÇÃO DA CLASSE "CANDIDATO"
    // função para automatizar avaliação do nivel candidato
function classifNivel(a){
    if (a <= 48) return "Junior"
    if (a > 48 && a <= 120) return "Pleno"
    if (a > 120) return "Sênior"
    if (a == null) return ''
}

class Candidato{
    constructor(nome, area, habilidades, experienciaMeses, nivel){
    this.nome = nome;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
    this.nivel = classifNivel(experienciaMeses)
    }
}
// lista de candidatos disponíveis a avaliar
const candidatos = []

// CRIAÇÃO DE UM OBJETO CANDIDATO a partir de sua classe
// -> inserção desse candidato no array geral (base RH) de candidatos disponiveis
candidatos.push(new Candidato('Tânia FONSECA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban'], 26, this.nivel))
// console.log(candidatos)


// APRESENTAÇÃO DO(S) CANDIpadrão DATO(S)
candidatos.forEach(candidato =>{
    console.log('Nome do(a) candidato(a): ' + candidato.nome +
    '\nÁrea: ' + candidato.area +
    '\nSkills: ' + candidato.habilidades.join(', ') +
    '\nExperiência (em meses): ' + candidato.experienciaMeses +
    '\nNível do candidato: ' + candidato.nivel + '\n')
})




// //  CRIAÇÃO DE ARRAY EXCLUSIVO DAS HABILIDADES DO CANDIDATO
// const skillsCandidato = [candidato.habilidades]  /*.map(elemento => elemento.toString().toLowerCase())*/
// console.log(skillsCandidato)



// const skillsFormatdLowerCase = skillsCandidato.map(elemento => elemento.toString().toLowerCase())
// console.log(skillsFormatdLowerCase[1])
// console.log(skillsFormatdLowerCase)



// ANÚNCIO DE VAGA GENERALISTA: CRIAÇÃO DE CLASSE PAI:
class Vaga{
    constructor(id, titulo, empresa, requisitos, modalidade, salario){
    this.id = id;
    this.titulo = titulo;
    this.empresa = empresa;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
    this.salario = salario
    }
    exibirResumo(){
        console.log(`${this.id} - a empresa ${this.empresa} propõe um emprego de ${this.titulo}, que exige as skills de ${this.requisitos}, para uma remuneração de R$ ${this.salario} em modo ${this.modalidade}`)
    }
}

// ANÚNCIO DE VAGAS TECH: CRIAÇÃO DE CLASSE FILHA, COM HERANÇA DE ATRIBUTOS PAI
class VagaDev extends Vaga{
    constructor(id, titulo, empresa, requisitos, modalidade, salario, nivel){
       super(id, titulo, empresa, requisitos, modalidade, salario)
       this.nivel = nivel
    }
    exibirResumo(){
    console.log(`${this.id} | ${this.empresa} -> ${this.titulo}, nível ${this.nivel}'\n'Requisitos: ${this.requisitos}'\n'Salario: R$ ${this.salario}'\n'Modo: ${this.modalidade}`)
    }
}


// CONSTRUÇÃO DO ARRAY DE OBJETOS-VAGAS A PARTIR DA CLASSE VAGADEV
const vagaDevIndexadas = []

vagaDevIndexadas.push(new VagaDev(1, 'Desenvolvedor Front-End', 'StormCode', ['JavaScript', 'Github', 'lógica de programação'], 'Remoto', 2800, 'Junior'))

vagaDevIndexadas.push(new VagaDev(2, 'Estagiário Front-End', 'TechRockode', ['JavaScript', 'Github', 'lógica de programação', 'Kanban'], 'Híbrido', 1800, "Estágio"))

vagaDevIndexadas.push(new VagaDev(3, 'Programador Javascript', 'GoBuzz Lab', ['JavaScript', 'arrays', 'objetos', 'funções', 'Github', 'lógica de programação'], 'Presencial', 3000, "Junior"))

vagaDevIndexadas.push(new VagaDev(4, "Desenvolvedor Front-End", "WebStart Tecnologia", ["JavaScript", "HTML", "CSS", 'Github', 'lógica de programação', "React", "Git"], "Remoto", 4500, "Junior"))

vagaDevIndexadas.push(new VagaDev(5, "Estagiário em Desenvolvimento Web", "Inova Digital", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Bootstrap"], "Híbrido", 1800, "Estágio"))

vagaDevIndexadas.push(new VagaDev(6, "Front-End Developer (React) - Pleno", "Fintech Nexus", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Next.js", "Tailwind CSS"], "Remoto", 8500, "Pleno"))

vagaDevIndexadas.push(new VagaDev(7, "Desenvolvedor Full Stack JS", "Core Systems", ["JavaScript", 'Github', 'lógica de programação', "Node.js", "Express", "React", "MongoDB"], "Presencial", 5000, "Junior"))

vagaDevIndexadas.push(new VagaDev(8, "Desenvolvedor Front-End focado em UI", "Creative Studio", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Sass", "Figma"], "Remoto", 4000, "Junior"))

vagaDevIndexadas.push(new VagaDev(9, "Engenheiro de Software React", "BigTech Brasil", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Redux", "Jest", "AWS"], "Remoto", 15000, "Sênior"))

vagaDevIndexadas.push(new VagaDev(10, "Vaga Afirmativa - Dev Front-End", "Inclusiva Tech", ['Github', 'lógica de programação', "JavaScript", "HTML", "CSS", "React"], "Remoto", 4200, "Junior"))

vagaDevIndexadas.push(new VagaDev(11, "Desenvolvedor JavaScript (Node.js)", "LogiTech", ['Github', 'lógica de programação', "JavaScript", "Node.js", "TypeScript", "PostgreSQL", "Docker"], "Híbrido", 9000, "Pleno"))

vagaDevIndexadas.push(new VagaDev(12, "Suporte Técnico Nível 2 / Dev Bug Hunter", "SaaS Global", ['Github', 'lógica de programação', "JavaScript", "HTML", "SQL", "DevTools"], "Presencial", 3500, "Junior"))

vagaDevIndexadas.push(new VagaDev(13, "Desenvolvedor Front-End Mobile (React Native)", "AppNation", ['Github', 'lógica de programação', "JavaScript", "TypeScript", "React Native", "Android Studio", "iOS"], "Remoto", 9500, "Pleno"))
// console.log(vagaDevIndexadas)


// APRESENTAÇÃO DAS VAGAS INDEXADAS (SUPOSTAMENTE PELO BUSCADOR)
vagaDevIndexadas.forEach(item =>{
    console.log(`${item.id}. ${item.empresa} -> ${item.titulo}, nível ${item.nivel}\nRequisitos: ${item.requisitos}\nSalario: R$ ${item.salario}\nModo: ${item.modalidade}\n`)
})
// funciona
// console.log(vagaDevIndexadas[2].requisitos[5])

// tbm funciona
// let skillCandidato

// detecção de vagas compatíveis
// for (i=0; i < candidatos[0].habilidades.length; i++) {
//         console.log(i)
// } 

// for(i=0; i < vagaDevIndexadas.length; i++){
//     console.log(i)
// }
// vagaDevIndexadas.filter(vaga => vaga.requisitos.includes(candidatos[0].habilidades[i]))

function loopSkillsCandidato(){
    candidatos[0].habilidades.forEach(habilidade => {
        // console.log(habilidade)
        return habilidade
    })
}
// loopSkillsCandidato()

// vagaDevIndexadas.forEach(vaga => {
//     vaga.requisitos.filter(requisito => {
//         requisito === loopSkillsCandidato()? console.log('coincide'): console.log('não coincide');

//     })
// })
// console.log(candidatos[0].habilidades[1])

console.log(
    vagaDevIndexadas.filter(item =>
        item.requisitos.includes('HTML')
)
)
// funciona
console.log(
    vagaDevIndexadas.filter(item => item.requisitos.includes('React'))
)


// function requisitosCumpridos(){
//     for(i=0; i < vagaDevIndexadas.length; i++) {
//     vagaDevIndexadas[i].requisitos
//     }        
// }

// requisitosCumpridos()




const listaVagasCompativeis = []

let pontosTotais = 0
let pontosGanhos = 0

// techsVagaDev01.forEach(item => {
//     pontosTotais += 1;
//     if (skillsCandidato.includes(item)) {
//       pontosGanhos += 1;
//     }
//     console.log(pontosTotais + ' | ' + pontosGanhos)
// })






// function buscarVagasIndexadas(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(vagaDevIndexadas);
//         }, 1000);        
//     })
// }

// async function iniciarSistema(){
//     const vagasCarregadas = await buscarVagasIndexadas();
//     console.log('Vagas carregadas com sucesso!');
//     console.log(vagasCarregadas)
// }