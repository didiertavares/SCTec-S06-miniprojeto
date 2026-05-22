const input = require('prompt-sync')()


// CRIAÇÃO DA CLASSE "CANDIDATO"
    // função para automatizar avaliação do nivel candidato
function classifNivel(a){
    if (a <= 6) return "Estágio"
    if (a > 6 && a <= 48) return "Junior"
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
candidatos.push(new Candidato('Tânia FONSECA', 'FrontEnd', ['JavaScript', 'HTML', 'CSS', 'Github', 'lógica de programação', 'Kanban'], 36, this.nivel))
// console.log(candidatos)


// APRESENTAÇÃO DO(S) CANDIDATO(S)
console.log('LISTA DE CANDIDATOS DISPONÍVEIS NA BASE RH: \n')
candidatos.forEach(candidato =>{
    console.log('Nome do(a) candidato(a): ' + candidato.nome +
    '\nÁrea: ' + candidato.area +
    '\nSkills: ' + candidato.habilidades.join(', ') +
    '\nExperiência (em meses): ' + candidato.experienciaMeses +
    '\nNível do candidato: ' + candidato.nivel + '\n')
})

let inputCandidato = input('Qual candidato você quer avaliar?  ')
const n = Number(inputCandidato)
// console.log(n)

if (n >= 0 && n < candidatos.length) {
    console.log(`\nOk, vamos avaliar a compatibilidade de ${candidatos[n].nome} com as vagas disponíveis\n`)
} else {
    console.log('Opção inexistente! Por favor escolha outro candidato');
    return;
}


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
class VagaFE extends Vaga{
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

vagasIndex.push(new VagaFE(1, 'Desenvolvedor Front-End', 'StormCode', ['JavaScript', 'Github', 'lógica de programação'], 'Remoto', 2800, 'Junior'))

vagasIndex.push(new VagaFE(2, 'Estagiário Front-End', 'TechRockode', ['JavaScript', 'Github', 'lógica de programação', 'Kanban'], 'Híbrido', 1800, "Estágio"))

vagasIndex.push(new VagaFE(3, 'Programador Javascript', 'GoBuzz Lab', ['JavaScript', 'arrays', 'objetos', 'funções', 'Github', 'lógica de programação'], 'Presencial', 3000, "Junior"))

vagasIndex.push(new VagaFE(4, "Desenvolvedor Front-End", "WebStart Tecnologia", ["JavaScript", "HTML", "CSS", 'Github', 'lógica de programação', "React", "Git"], "Remoto", 4500, "Junior"))

vagasIndex.push(new VagaFE(5, "Estagiário em Desenvolvimento Web", "Inova Digital", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Bootstrap"], "Híbrido", 1800, "Estágio"))

vagasIndex.push(new VagaFE(6, "Front-End Developer (React) - Pleno", "Fintech Nexus", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Next.js", "Tailwind CSS"], "Remoto", 8500, "Pleno"))

vagasIndex.push(new VagaFE(7, "Desenvolvedor Full Stack JS", "Core Systems", ["JavaScript", 'Github', 'lógica de programação', "Node.js", "Express", "React", "MongoDB"], "Presencial", 5000, "Junior"))

vagasIndex.push(new VagaFE(8, "Desenvolvedor Front-End focado em UI", "Creative Studio", ['Github', 'lógica de programação', "HTML", "CSS", "JavaScript", "Sass", "Figma"], "Remoto", 4000, "Junior"))

vagasIndex.push(new VagaFE(9, "Engenheiro de Software React", "BigTech Brasil", ["JavaScript", 'Github', 'lógica de programação', "TypeScript", "React", "Redux", "Jest", "AWS"], "Remoto", 15000, "Sênior"))

vagasIndex.push(new VagaFE(10, "Vaga Afirmativa - Dev Front-End", "Inclusiva Tech", ['Github', 'lógica de programação', "JavaScript", "HTML", "CSS", "React"], "Remoto", 4200, "Junior"))

vagasIndex.push(new VagaFE(11, "Desenvolvedor JavaScript (Node.js)", "LogiTech", ['Github', 'lógica de programação', "JavaScript", "Node.js", "TypeScript", "PostgreSQL", "Docker"], "Híbrido", 9000, "Pleno"))

vagasIndex.push(new VagaFE(12, "Desenvolvedor Front-End Júnior", "Pixel Perfeito Software", ['Github', 'lógica de programação', "JavaScript", "HTML", "CSS", "Vue.js"], "Híbrido", 4800, "Junior"))

vagasIndex.push(new VagaFE(13, "Desenvolvedor Front-End Mobile (React Native)", "AppNation", ['Github', 'lógica de programação', "JavaScript", "TypeScript", "React Native", "Android Studio", "iOS"], "Remoto", 9500, "Pleno"))


// APRESENTAÇÃO FORMATADA DAS VAGAS INDEXADAS (SUPOSTAMENTE PELO BUSCADOR)
console.log('\n')
console.log('LISTA DE VAGAS FRONT-END INDEXADAS\n')
vagasIndex.forEach(item =>{
    console.log(`${item.id}. ${item.empresa} -> ${item.titulo}, nível ${item.nivel}\nRequisitos: ${item.requisitos}\nSalario: R$ ${item.salario}\nModo: ${item.modalidade}\n`)
})
console.log('\n')


// // CRIAÇÃO DE ARRAY COMPOSTO EXCLUSIVAMENTE DOS ARRAYS DE TECHS REQUISITADAS NAS VAGAS
const vagasIndexRequisitos = vagasIndex.map(vaga => ({
    requisitos: vaga.requisitos
}))
// console.log(vagasIndexRequisitos)


// CRIAÇÃO DE ARRAY DAS HABILIDADES DO CANDIDATO[n]
const techsCandidato = candidatos[n].habilidades
// console.log(techsCandidato)
// console.log(candidatos[n].nivel)

let inputVaga = input('Qual vaga você quer avaliar?  ')
const v = Number(inputVaga)-1


if(v >= 0 && v < vagasIndex.length) {console.log(`\nOk, vamos avaliar a compatibilidade de ${candidatos[n].nome} especificamente com a vaga de ${vagasIndex[v].titulo} na ${vagasIndex[v].empresa}!\n`)}
else {
    console.log('Opção inexistente! Por favor escolha outro candidato')
    return
}


// ADERÊNCIA DO PERFIL CANDIDATO[n] À CADA VAGA:
function calcularCompatVaga(n, v) {

    let pontosTotais = 0
    let pontosGanhos = 0

    // compatibilidade em nível de experiência
    pontosTotais += 2
    if (candidatos[n].nivel === vagasIndex[v].nivel) {pontosGanhos += 2}
    else {console.log('nível de perfil incompatível')}
    // console.log(pontosGanhos, pontosTotais)

    // compatibilidade entre habilidades-Candidato e requisitos-Vaga
    vagasIndex[v].requisitos.forEach(requisito=> {
        pontosTotais++
        if (techsCandidato.includes(requisito)) {pontosGanhos++}
    })
    
    const scorePercent = ((pontosGanhos/pontosTotais)*100).toFixed(0)

    console.log(`${candidatos[n].nome} tem ${scorePercent}% de compatibilidade com a vaga de ${vagasIndex[v].titulo} na ${vagasIndex[v].empresa}`)

    const techsFaltantes = vagasIndex[v].requisitos.filter(requisito => {
        return (!techsCandidato.includes(requisito))
    })
    
    console.log(`Para esta vaga, faltam as techs seguintes: \n${techsFaltantes.join('\n')}\n`)

}
calcularCompatVaga(n, v)


// LISTA DE COMPATIBILIDADE DO(A) CANDIDATO(A) COM A LISTA DE VAGAS
function calcularCompatListaVagas(n, i) {

    let pontosTotais = 0
    let pontosGanhos = 0

    // compatibilidade em nível de experiência
    pontosTotais += 2
    if (candidatos[n].nivel === vagasIndex[i].nivel) {pontosGanhos += 2}
    else {console.log('nível de perfil incompatível')}
    // console.log(pontosGanhos, pontosTotais)

    // compatibilidade entre habilidades-Candidato e requisitos-Vaga
    vagasIndex[i].requisitos.forEach(requisito=> {
        pontosTotais++
        if (techsCandidato.includes(requisito)) {pontosGanhos++}
    })
    
    const scorePercent = ((pontosGanhos/pontosTotais)*100).toFixed(0)

    console.log(`${candidatos[n].nome} -> ${scorePercent}% de compatibilidade\nvaga de ${vagasIndex[i].titulo} na ${vagasIndex[i].empresa}\n`)

    const techsFaltantes = vagasIndex[i].requisitos.filter(requisito => {
        return (!techsCandidato.includes(requisito))
    })
    
    // console.log(`Para esta vaga, faltam as techs seguintes: \n${techsFaltantes.join('\n')}\n`)
}


for (i = 0; i < vagasIndex.length; i++){
    console.log(i)
    calcularCompatListaVagas(n, i)
}


// console.log('| candidato(a): ${}\n\n')
// console.log('| vaga de ${} na empresa ${}\n COMPATIBILIDADE: ${})