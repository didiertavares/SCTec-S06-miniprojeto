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
candidatos.push(new Candidato('Tânia FONSECA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban', 'DevTools', 'React'], 26, this.nivel))
// console.log(candidatos)


// APRESENTAÇÃO DO(S) CANDIDATO(S)
candidatos.forEach(candidato =>{
    console.log('Nome do(a) candidato(a): ' + candidato.nome +
    '\nÁrea: ' + candidato.area +
    '\nSkills: ' + candidato.habilidades.join(', ') +
    '\nExperiência (em meses): ' + candidato.experienciaMeses +
    '\nNível do candidato: ' + candidato.nivel + '\n')
})


// const skillsFormatdLowerCase = skillsCandidato.map(elemento => elemento.toString().toLowerCase())



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
const vagasIndex = []

vagasIndex.push(new VagaDev(1, 'Desenvolvedor Front-End', 'StormCode', ['JavaScript', 'Github', 'lógica de programação'], 'Remoto', 2800, 'Junior'))

vagasIndex.push(new VagaDev(2, 'Estagiário Front-End', 'TechRockode', ['JavaScript', 'Github', 'lógica de programação', 'Kanban'], 'Híbrido', 1800, "Estágio"))

vagasIndex.push(new VagaDev(3, 'Programador Javascript', 'GoBuzz Lab', ['JavaScript', 'arrays', 'objetos', 'funções', 'Github', 'lógica de programação'], 'Presencial', 3000, "Junior"))

vagasIndex.push(new VagaDev(4, "Desenvolvedor Front-End", "WebStart Tecnologia", ["JavaScript", "HTML", "CSS", 'Github', 'lógica de programação', "React", "Git"], "Remoto", 4500, "Junior"))

vagasIndex.push(new VagaDev(5, "Estagiário em Desenvolvimento Web", "Inova Digital", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Bootstrap"], "Híbrido", 1800, "Estágio"))

vagasIndex.push(new VagaDev(6, "Front-End Developer (React) - Pleno", "Fintech Nexus", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Next.js", "Tailwind CSS"], "Remoto", 8500, "Pleno"))

vagasIndex.push(new VagaDev(7, "Desenvolvedor Full Stack JS", "Core Systems", ["JavaScript", 'Github', 'lógica de programação', "Node.js", "Express", "React", "MongoDB"], "Presencial", 5000, "Junior"))

vagasIndex.push(new VagaDev(8, "Desenvolvedor Front-End focado em UI", "Creative Studio", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Sass", "Figma"], "Remoto", 4000, "Junior"))

vagasIndex.push(new VagaDev(9, "Engenheiro de Software React", "BigTech Brasil", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Redux", "Jest", "AWS"], "Remoto", 15000, "Sênior"))

vagasIndex.push(new VagaDev(10, "Vaga Afirmativa - Dev Front-End", "Inclusiva Tech", ['Github', 'lógica de programação', "JavaScript", "HTML", "CSS", "React"], "Remoto", 4200, "Junior"))

vagasIndex.push(new VagaDev(11, "Desenvolvedor JavaScript (Node.js)", "LogiTech", ['Github', 'lógica de programação', "JavaScript", "Node.js", "TypeScript", "PostgreSQL", "Docker"], "Híbrido", 9000, "Pleno"))

vagasIndex.push(new VagaDev(12, "Suporte Técnico Nível 2 / Dev Bug Hunter", "SaaS Global", ['Github', 'lógica de programação', "JavaScript", "HTML", "SQL", "DevTools"], "Presencial", 3500, "Junior"))

vagasIndex.push(new VagaDev(13, "Desenvolvedor Front-End Mobile (React Native)", "AppNation", ['Github', 'lógica de programação', "JavaScript", "TypeScript", "React Native", "Android Studio", "iOS"], "Remoto", 9500, "Pleno"))
// console.log(vagaDevIndexadas)


// APRESENTAÇÃO FORMATADA DAS VAGAS INDEXADAS (SUPOSTAMENTE PELO BUSCADOR)
vagasIndex.forEach(item =>{
    console.log(`${item.id}. ${item.empresa} -> ${item.titulo}, nível ${item.nivel}\nRequisitos: ${item.requisitos}\nSalario: R$ ${item.salario}\nModo: ${item.modalidade}\n`)
})

// // CRIAÇÃO DE ARRAY COMPOSTO EXCLUSIVAMENTE DOS ARRAYS DE TECHS REQUISITADAS NAS VAGAS
const vagasIndexRequisitos = vagasIndex.map(vaga => ({
    requisitos: vaga.requisitos
}))
console.log(vagasIndexRequisitos)

// CRIAÇÃO DE ARRAY DAS HABILIDADES DO CANDIDATO[0]
const techsCandidato0 = candidatos[0].habilidades
console.log(techsCandidato0)

const vagas05Requisitos = vagasIndexRequisitos[5]
console.log(vagas05Requisitos)

// console.log(
//     vagasIndex.filter(item => item.requisitos.includes('HTML'))
// )

// funciona
// console.log(
//     vagasIndex.filter(item => item.requisitos.includes('React'))
// )


// ADERÊNCIA DO PERFIL CANDIDATO À CADA VAGA:
function calcularCompatVaga() {
    let pontosTotais = 0
    let pontosGanhos = 0

    // compatibilidade em nível de experiência
    pontosTotais += 2
    if(candidatos[0].nivel === vagasIndex[2].nivel){pontosGanhos += 2}
    else {console.log('nível de perfil incompatível')}
    console.log(pontosGanhos, pontosTotais)

    // compatibilidade entre habilidades-Candidato e requisitos-Vaga
    // vagas05Requisitos.forEach(item => {
    //     pontosTotais++
    //     if (techsCandidato0.includes(item)) pontosGanhos++
    // })
    // console.log(pontosGanhos, pontosTotais)
}
calcularCompatVaga()

vagasIndexRequisitos[5].forEach(item => {
    console.log(item)
    // if (techsCandidato0.includes(item)) {pontosGanhos++}
    // pontosTotais++
})
// console.log(pontosGanhos, pontosTotais)

// calcularCompatVaga(){
// for(i=0; i < vagasIndexRequisitos.length; i++){
//     pontosTotais=2
//     console.log('teste')
    // if (vagasIndexRequisitos[i].includes(candidatos[0].habilidades[0])) pontosGanhos++
// }


// vagasIndex.forEach(vaga => {
//     pontosTotais
//     if (vaga.requisitos.includes(candidatos[0].habilidades[7])) 
//         {console.log(vaga)}
//     // vaga.filter(vaga.requisitos.includes(candidatos[0].habilidades)
//         // requisito === loopSkillsCandidato()? : ;

// })







// function buscarVagasIndexadas(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(vagasIndex);
//         }, 1000);        
//     })
// }

// async function iniciarSistema(){
//     const vagasCarregadas = await buscarVagasIndexadas();
//     console.log('Vagas carregadas com sucesso!');
//     console.log(vagasCarregadas)