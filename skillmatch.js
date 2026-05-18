const input = require('prompt-sync')()

// CRIAÇÃO DA CLASSE "CANDIDATO"
class Candidato{
    constructor(nome, area, habilidades, experienciaMeses, nivel){
    this.nome = nome;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
    this.nivel = nivel
    }
}

// CRIAÇÃO DO OBJETO CANDIDATO1
const candidato1 = new Candidato('Tânia FONSECA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban'], 18, '')
console.log(candidato1)
console.log(candidato1.nivel)

let expeCandidato = candidato1.experienciaMeses
// console.log(expeCandidato)

function classifNivel(a){
    if (a <= 48) return "Junior"
    if (a > 48 && a <= 120) return "Pleno"
    if (a > 120) return "Sênior"
}

let nivelCandidato = classifNivel(expeCandidato)
// console.log(nivelCandidato)

candidato1.nivel = nivelCandidato
// console.log('o atributo nivel do objeto candidato é: ' + candidato1.nivel)

// APRESENTAÇÃO DO CANDIDATO
console.log('Nome do(a) candidato(a): ' + candidato1.nome +
    '\nÁrea: ' + candidato1.area +
    '\nSkills: ' + candidato1.habilidades.join(', ') +
    '\nExperiência (em meses): ' + candidato1.experienciaMeses +
    '\nNível do candidato: ' + candidato1.nivel + '\n'
)

//  CRIAÇÃO DE ARRAY EXCLUSIVO DAS HABILIDADES DO CANDIDATO
const skillsCandidato = [candidato1.habilidades]  /*.map(elemento => elemento.toString().toLowerCase())*/


// console.log(typeof skillsCandidato[1])
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
    console.log(`${this.id} - a ${this.empresa} propõe uma vaga de ${this.titulo}, nível ${this.nivel},'\n'exigindo conhecimentos em ${this.requisitos},'\n'para uma remuneração de R$ ${this.salario} em modo ${this.modalidade}`)
    }
}

// CONSTRUÇÃO DO ARRAY DE OBJETOS-VAGAS A PARTIR DA CLASSE VAGADEV
const vagaDev01 = new VagaDev(1, 'Desenvolvedor Front-End Júnior', 'StormCode', ['JavaScript', 'Github', 'lógica de programação'], 'Remoto', 2800, 'Junior')
const vagaDev02 = new VagaDev(2, 'Estagiário Front-End', 'TechRockode', ['JavaScript', 'Github', 'Kanban'], 'Híbrido', 1800, "Estágio")
const vagaDev03 = new VagaDev(3, 'Programador Javascript Júnior', 'GoBuzz Lab', ['JavaScript', 'arrays', 'objetos', 'funções'], 'Presencial', 3000, "Junior")
const vagaDev04 = new VagaDev(4, "Desenvolvedor Front-End Júnior", "WebStart Tecnologia", ["JavaScript", "HTML", "CSS", "React", "Git"], "Remoto", 4500, "Junior")
const vagaDev05 = new VagaDev(5, "Estagiário em Desenvolvimento Web", "Inova Digital", ["HTML", "CSS", "JavaScript", "Bootstrap"], "Híbrido", 1800, "Estágio")
const vagaDev06 = new VagaDev(6, "Front-End Developer (React) - Pleno", "Fintech Nexus", ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"], "Remoto", 8500, "Pleno")
const vagaDev07 = new VagaDev(7, "Desenvolvedor Full Stack JS Júnior", "Core Systems", ["JavaScript", "Node.js", "Express", "React", "MongoDB"], "Presencial", 5000, "Junior")
const vagaDev08 = new VagaDev(8, "Desenvolvedor Front-End focado em UI", "Creative Studio", ["HTML", "CSS", "JavaScript", "Sass", "Figma"], "Remoto", 4000, "Junior")
const vagaDev09 = new VagaDev(9, "Engenheiro de Software React Sênior", "BigTech Brasil", ["JavaScript", "TypeScript", "React", "Redux", "Jest", "AWS"], "Remoto", 15000, "Senior")
const vagaDev10 = new VagaDev(10, "Vaga Afirmativa - Dev Front-End Júnior", "Inclusiva Tech", ["JavaScript", "HTML", "CSS", "React"], "Remoto", 4200, "Junior")
const vagaDev11 = new VagaDev(11, "Desenvolvedor JavaScript (Node.js) Pleno", "LogiTech", ["JavaScript", "Node.js", "TypeScript", "PostgreSQL", "Docker"], "Híbrido", 9000, "Pleno")
const vagaDev12 = new VagaDev(12, "Suporte Técnico Nível 2 / Dev Bug Hunter", "SaaS Global", ["JavaScript", "HTML", "SQL", "DevTools"], "Presencial", 3500, "Junior")
const vagaDev13 = new VagaDev(13, "Desenvolvedor Front-End Mobile (React Native)", "AppNation", ["JavaScript", "TypeScript", "React Native", "Android Studio", "iOS"], "Remoto", 9500, "Pleno")
console.log(typeof vagaDev10.habilidades)


// ARRAY DE VAGAS OBTIDO A PARTIR DOS OBJETOS CRIADOS PELA CLASSE VAGADEV
const vagaDevIndexadas = [vagaDev01, vagaDev02, vagaDev03, vagaDev04, vagaDev05, vagaDev06, vagaDev07, vagaDev08, vagaDev09, vagaDev10, vagaDev11, vagaDev12, vagaDev13]
// console.log(vagaDevIndexadas)

// APRESENTAÇÃO DAS VAGAS INDEXADAS (SUPOSTAMENTE PELO BUSCADOR)
vagaDevIndexadas.forEach((item, i)=>{
    console.log(`${item.id} - a ${item.empresa} propõe uma vaga de ${item.titulo}, nível ${item.nivel}, exigindo conhecimentos em ${item.requisitos}, para uma remuneração de R$ ${item.salario} em modo ${item.modalidade}\n`)
})












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