const input = require('prompt-sync')()

// perfil tipo candidato : objeto a personalizar
const candidato = {
    nome: 'Ana',
    area: 'FrontEnd',
    habilidades: ['JS', 'Github', 'lógica de programação', 'Kanban'],
    experienciaMeses: 3
}

// anúncio tipo de vagas: array a personalizar
const vagas = [
    {
    id: 1,
    titulo: 'Desenvolvedor Front-End Júnior',
    empresa: 'StormCode',
    requisitos: ['JavaScript', 'Github', 'lógica de programação'],
    nivel: "Junior",
    salario: 2800,
    modalidade: 'Remoto'
    },
    {
    id: 2,
    titulo: 'Estagiário Front-End',
    empresa: 'TechRockode',
    requisitos: ['JavaScript', 'Github', 'Kanban'],
    nivel: "Estágio",
    salario: 1800,
    modalidade: 'Híbrido'
    },
    {
    id: 3,
    titulo: 'Programador Javascript Júnior',
    empresa: 'GoBuzz Lab',
    requisitos: ['JavaScript', 'arrays', 'objetos', 'funções'],
    nivel: "Junior",
    salario: 3000,
    modalidade: 'Presencial'
    },
    {
    id: 4,
    titulo: "Desenvolvedor Front-End Júnior",
    empresa: "WebStart Tecnologia",
    requisitos: ["JavaScript", "HTML", "CSS", "React", "Git"],
    nivel: "Junior",
    salario: 4500,
    modalidade: "Remoto"
  },
  {
    id: 5,
    titulo: "Estagiário em Desenvolvimento Web",
    empresa: "Inova Digital",
    requisitos: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    nivel: "Estágio",
    salario: 1800,
    modalidade: "Híbrido"
  },
  {
    id: 6,
    titulo: "Front-End Developer (React) - Pleno",
    empresa: "Fintech Nexus",
    requisitos: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    nivel: "Pleno",
    modalidade: "Remoto",
    salario: 8500
  },
  {
    id: 7,
    titulo: "Desenvolvedor Full Stack JS Júnior",
    empresa: "Core Systems",
    requisitos: ["JavaScript", "Node.js", "Express", "React", "MongoDB"],
    nivel: "Junior",
    modalidade: "Presencial",
    salario: 5000
  },
  {
    id: 8,
    titulo: "Desenvolvedor Front-End focado em UI",
    empresa: "Creative Studio",
    requisitos: ["HTML", "CSS", "JavaScript", "Sass", "Figma"],
    nivel: "Junior",
    modalidade: "Remoto",
    salario: 4000
  },
  {
    id: 9,
    titulo: "Engenheiro de Software React Sênior",
    empresa: "BigTech Brasil",
    requisitos: ["JavaScript", "TypeScript", "React", "Redux", "Jest", "AWS"],
    nivel: "Senior",
    modalidade: "Remoto",
    salario: 15000
  },
  {
    id: 10,
    titulo: "Vaga Afirmativa - Dev Front-End Júnior",
    empresa: "Inclusiva Tech",
    requisitos: ["JavaScript", "HTML", "CSS", "React"],
    nivel: "Junior",
    modalidade: "Remoto",
    salario: 4200
  },
  {
    id: 11,
    titulo: "Desenvolvedor JavaScript (Node.js) Pleno",
    empresa: "LogiTech",
    requisitos: ["JavaScript", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    nivel: "Pleno",
    modalidade: "Híbrido",
    salario: 9000
  },
  {
    id: 12,
    titulo: "Suporte Técnico Nível 2 / Dev Bug Hunter",
    empresa: "SaaS Global",
    requisitos: ["JavaScript", "HTML", "SQL", "DevTools"],
    nivel: "Junior",
    modalidade: "Presencial",
    salario: 3500
  },
  {
    id: 13,
    titulo: "Desenvolvedor Front-End Mobile (React Native)",
    empresa: "AppNation",
    requisitos: ["JavaScript", "TypeScript", "React Native", "Android Studio", "iOS"],
    nivel: "Pleno",
    modalidade: "Remoto",
    salario: 9500
  }
]

// exemplo de resultado esperado no console após análise:
// Empresa: TechStart
// Cargo: Desenvolvedor Front-End Junior
// Compatibilidade: 67%
// (...) 


// criação OBRIGATÓRIA  de uma classe simples:
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

class VagaDev extends Vaga{
    constructor(id, titulo, empresa, requisitos, modalidade, salario, nivel){
       super(id, titulo, empresa, requisitos, modalidade, salario)
       this.nivel = nivel
    }
    exibirMensagem(){
    console.log('classe VagaDevFE criada com sucesso')
    }
    exibirResumo(){
    console.log(`${this.id} - a ${this.empresa} propõe uma vaga de ${this.titulo}, nível ${this.nivel}, exigindo conhecimentos em ${this.requisitos}, para uma remuneração de R$ ${this.salario} em modo ${this.modalidade}`)
    }
}

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


vagaDev01.exibirResumo()
vagaDev02.exibirResumo()
vagaDev03.exibirResumo()
vagaDev04.exibirResumo()
vagaDev05.exibirResumo()
vagaDev06.exibirResumo()
vagaDev07.exibirResumo()
vagaDev08.exibirResumo()
vagaDev09.exibirResumo()
vagaDev10.exibirResumo()
vagaDev11.exibirResumo()
vagaDev12.exibirResumo()
vagaDev13.exibirResumo()

const VagaDevIndexadas = [vagaDev01, vagaDev02, vagaDev03, vagaDev04, vagaDev05, vagaDev06, vagaDev07, vagaDev08, vagaDev09, vagaDev10, vagaDev11, vagaDev12, vagaDev13]
console.log(VagaDevIndexadas.length)
console.log(VagaDevIndexadas)
