export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  items: string[];
  emphasis?: 'primary' | 'secondary';
}

export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Back-end' | 'Front-end' | 'Automação';
  status: string;
  description: string;
  highlights: string[];
  techs: string[];
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  place: string;
  period: string;
  detail: string;
}

export const portfolioData = {
  profile: {
    name: 'João Vitor Henrique Campos',
    role: 'Desenvolvedor Back-end & Full-Stack',
    bio: 'Faço APIs em Java e Spring Boot, modelo bancos relacionais e geoespaciais e construo as telas web e mobile que usam tudo isso. Estudo Ciência da Computação e trabalho com Arduino e automação na rede municipal de ensino do Paulist.',
    location: 'Recife, PE',
    availability: 'Disponível para oportunidades',
    workMode: 'Presencial, Remoto ou Híbrido',
    email: 'jvitorhcampos@gmail.com',
    cvUrl: 'CV.pdf',
    githubUrl: 'https://github.com/juaozinh1',
    linkedinUrl: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-henrique-campos-3a14b7310/',
  },
  currentlyBuilding: {
    title: 'Plataforma Marketplace Full-Stack',
    detail:
      'API REST em Java e Spring Boot integrada a PostgreSQL/PostGIS, com painel administrativo em React e app mobile.',
  },
  experience: [
    {
      role: 'Estagiário em Educação Maker',
      place: 'Secretaria de Educação e Esportes do Paulista',
      period: 'Atual',
      detail: 'Desenvolvimento de projetos com sistemas embarcados, Arduino, C++ e automação.',
    },
    {
      role: 'Bacharelado em Ciência da Computação',
      place: 'Graduação',
      period: 'Em andamento',
      detail: 'Foco em engenharia de software, arquitetura de sistemas e bancos de dados.',
    },
    {
      role: 'Técnico em Desenvolvimento de Sistemas',
      place: 'Formação Técnica',
      period: 'Concluído',
      detail: 'Base prática em desenvolvimento web, lógica, APIs e bancos relacionais.',
    },
  ] as ExperienceItem[],
  skillGroups: [
    {
      id: 'backend',
      title: 'Back-end & APIs',
      summary: 'Construção de serviços REST, regras de negócio, autenticação e integrações.',
      items: ['Java', 'Spring Boot', 'Python', 'Django', 'PHP', 'Node.js', 'APIs REST'],
      emphasis: 'primary',
    },
    {
      id: 'data-infra',
      title: 'Banco de Dados & Infra',
      summary: 'Modelagem relacional, consultas espaciais, containers e versionamento.',
      items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL', 'Supabase', 'Docker', 'Git & GitHub'],
      emphasis: 'secondary',
    },
    {
      id: 'frontend',
      title: 'Front-end & Mobile',
      summary: 'Interfaces responsivas, dashboards administrativos e aplicativos multiplataforma.',
      items: ['TypeScript', 'JavaScript', 'React', 'React Native', 'Expo', 'Tailwind CSS', 'Vite'],
      emphasis: 'secondary',
    },
    {
      id: 'embedded',
      title: 'Embarcados & Automação',
      summary: 'Prototipagem de hardware, lógica embarcada e scripts de automação.',
      items: ['C++', 'Arduino', 'Kotlin', 'Automação', 'Linux / Shell'],
      emphasis: 'secondary',
    },
  ] as SkillGroup[],
  projects: [
    {
      id: 'chamala',
      title: 'ChamaLÁ — Marketplace de Serviços',
      category: 'Full-Stack',
      status: 'Em desenvolvimento',
      description:
        'Plataforma completa conectando clientes e prestadores de serviço, unindo API REST em Java/Spring Boot, banco geoespacial, painel web administrativo e aplicativo mobile.',
      highlights: [
        'API REST em Java + Spring Boot com PostgreSQL/PostGIS',
        'Painel administrativo em React, Vite e Tailwind CSS',
        'App mobile em React Native com Expo e busca de endereço',
      ],
      techs: ['Java', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'React', 'React Native'],
      repoUrl: 'https://github.com/juaozinh1/ChamaLa',
      featured: true,
    },
    {
      id: 'sanea-alerta',
      title: 'SaneaAlerta',
      category: 'Full-Stack',
      status: 'MVP',
      description:
        'Plataforma cívica para registro georreferenciado de ocorrências urbanas e rurais, com votação comunitária, mapas de calor e painel gerencial.',
      highlights: [
        'Registro georreferenciado de ocorrências',
        'Mapas de calor e dashboard para gestão municipal',
      ],
      techs: ['TypeScript', 'React', 'Tailwind CSS', 'Geolocalização'],
      repoUrl: 'https://github.com/juaozinh1/SaneaAlerta.git',
    },
    
    {
      id: 'gtarefas',
      title: 'GTarefas — Logística & Kanban',
      category: 'Full-Stack',
      status: 'Concluído',
      description:
        'Aplicação web de gerenciamento de tarefas e fluxo operacional em formato Kanban, focada em organização de equipes e acompanhamento de entregas.',
      highlights: [
        'Quadros Kanban com atualização de status',
        'Back-end em PHP integrado a banco relacional',
      ],
      techs: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      repoUrl: 'https://github.com/juaozinh1/gtarefas',
    },
  ] as Project[],
};
