import { BookOpen, Layers3, Gamepad2, Globe2 } from "lucide-react";

export const profile = {
  name: "Lucas Vale",
  role: "Professor e pesquisador em Tecnologias Educacionais",
  location: "Natal, RN · Bristol, UK",
  email: "lucsvale@gmail.com",
  shortBio:
    "Doutorando em Inovação em Tecnologias Educacionais, professor de História e Letramento Digital, com atuação em Realidade Virtual, jogos educacionais, humanidades digitais e ensino de História.",
  tags: ["Realidade Virtual", "Humanidades Digitais", "Jogos Educacionais", "Ensino de História"],
};

export const profileLinks = [
  { label: "Lattes", href: "#" },
  { label: "Google Scholar", href: "#" },
  { label: "ORCID", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export const stats = [
  { value: "10+", label: "anos em educação" },
  { value: "VR/XR", label: "foco de pesquisa" },
  { value: "PhD", label: "doutorado em andamento" },
  { value: "ADE", label: "Apple Distinguished Educator" },
];

export const expertise = [
  {
    icon: Layers3,
    title: "Tecnologias imersivas",
    description:
      "Pesquisa e desenvolvimento de experiências em Realidade Virtual, Aumentada e Mista para contextos educacionais e culturais.",
  },
  {
    icon: Gamepad2,
    title: "Jogos e aprendizagem",
    description:
      "Criação de jogos educacionais, narrativas interativas e experiências baseadas em investigação, autoria e participação ativa.",
  },
  {
    icon: BookOpen,
    title: "Ensino de História",
    description:
      "Uso de fontes, patrimônios, narrativas e tecnologias digitais para construir experiências significativas sobre o passado.",
  },
  {
    icon: Globe2,
    title: "Humanidades digitais",
    description:
      "Interseção entre cultura, memória, patrimônio, pesquisa acadêmica e produção digital em ambientes conectados.",
  },
];

export const publications = [
  {
    type: "Artigo",
    title: "Experiencing the Past in Virtual Reality: Possibilities and Challenges for Education",
    venue: "The European Conference on Education — ECE2026",
    year: "2026",
    description:
      "Discussão sobre as possibilidades e limites da Realidade Virtual para reconfigurar o passado como experiência em contextos educacionais.",
  },
  {
    type: "Revisão Sistemática",
    title: "Virtual Reality Experiences in Educational and Cultural Contexts",
    venue: "Manuscrito em desenvolvimento",
    year: "2026",
    description:
      "Mapeamento de tendências, abordagens e desafios em experiências de Realidade Virtual relacionadas ao passado.",
  },
  {
    type: "Produto educacional",
    title: "A Última Canção de Birkenau",
    venue: "RPG educacional para o ensino de História",
    year: "2021",
    description:
      "Jogo narrativo voltado ao ensino do Porrajmos, o genocídio cigano durante o nazismo, com livro do jogador e guia docente.",
  },
];

export const timeline = [
  {
    period: "2026",
    title: "Doutorado sanduíche e colaboração internacional",
    text: "Atuação vinculada à University of Bristol, com foco em Realidade Virtual, educação, jogos e humanidades digitais.",
  },
  {
    period: "2024 — atual",
    title: "Doutorado em Inovação em Tecnologias Educacionais",
    text: "Pesquisa sobre design de jogos em Realidade Virtual para o ensino de História na educação básica.",
  },
  {
    period: "2023",
    title: "Apple Distinguished Educator",
    text: "Reconhecimento pelo uso criativo e inovador de tecnologias digitais em práticas pedagógicas.",
  },
  {
    period: "2021",
    title: "Mestrado e produto educacional",
    text: "Desenvolvimento de um RPG educativo sobre o Porrajmos como recurso para o ensino de História.",
  },
];

export const projects = [
  {
    title: "Guardião do Seridó",
    category: "Jogo em Realidade Virtual",
    description:
      "Jogo em Realidade Virtual voltado à valorização do patrimônio cultural indígena e ao ensino de História nos anos finais do Ensino Fundamental.",
  },
  {
    title: "Anne Frank House VR",
    category: "Estudo de caso",
    description:
      "Análise sobre representação de passados sensíveis, presença, espacialidade e interpretação histórica em ambientes imersivos.",
  },
  {
    title: "Bridge Virtual Exchange Hub",
    category: "Intercâmbio virtual",
    description:
      "Proposta de conexão entre escolas de diferentes países por meio de experiências em Realidade Virtual, gamificação e desafios globais.",
  },
];

export const aboutImage = {
  src: "https://drive.google.com/uc?export=view&id=1-wcRgLJnyxyfrFIzTzrxE8umNJx5r3Xu",
  alt: "Pessoa usando headset de Realidade Virtual",
};

export function getPageContent(isPt) {
  return {
    profile: {
      ...profile,
      role: isPt ? profile.role : "Professor and researcher in Educational Technologies",
      shortBio: isPt
        ? profile.shortBio
        : "PhD candidate in Innovation in Educational Technologies, History and Digital Literacy teacher, working with Virtual Reality, educational games, digital humanities, and History education.",
      tags: isPt
        ? profile.tags
        : ["Virtual Reality", "Digital Humanities", "Educational Games", "History Education"],
    },
    stats: isPt
      ? stats
      : [
          { value: "10+", label: "years in education" },
          { value: "VR/XR", label: "research focus" },
          { value: "PhD", label: "in progress" },
          { value: "ADE", label: "Apple Distinguished Educator" },
        ],
    expertise: isPt
      ? expertise
      : [
          {
            icon: Layers3,
            title: "Immersive technologies",
            description: "Research and development of Virtual, Augmented, and Mixed Reality experiences for educational and cultural contexts.",
          },
          {
            icon: Gamepad2,
            title: "Games and learning",
            description: "Creation of educational games, interactive narratives, and experiences based on inquiry, authorship, and active participation.",
          },
          {
            icon: BookOpen,
            title: "History education",
            description: "Use of sources, heritage, narratives, and digital technologies to build meaningful ways of engaging with the past.",
          },
          {
            icon: Globe2,
            title: "Digital humanities",
            description: "Intersection between culture, memory, heritage, academic research, and digital production in connected environments.",
          },
        ],
    publications: isPt
      ? publications
      : [
          {
            type: "Paper",
            title: "Experiencing the Past in Virtual Reality: Possibilities and Challenges for Education",
            venue: "The European Conference on Education — ECE2026",
            year: "2026",
            description: "Discussion of the possibilities and limits of Virtual Reality for reconfiguring the past as an educational experience.",
          },
          {
            type: "Systematic review",
            title: "Virtual Reality Experiences in Educational and Cultural Contexts",
            venue: "Manuscript in progress",
            year: "2026",
            description: "Mapping of trends, approaches, and challenges in Virtual Reality experiences related to the past.",
          },
          {
            type: "Educational product",
            title: "A Última Canção de Birkenau",
            venue: "Educational RPG for History teaching",
            year: "2021",
            description: "Narrative game focused on teaching the Porrajmos, the Romani genocide under Nazism, with a player book and teacher guide.",
          },
        ],
    timeline: isPt
      ? timeline
      : [
          {
            period: "2026",
            title: "Sandwich PhD and international collaboration",
            text: "Work linked to the University of Bristol, focusing on Virtual Reality, education, games, and digital humanities.",
          },
          {
            period: "2024 — present",
            title: "PhD in Innovation in Educational Technologies",
            text: "Research on Virtual Reality game design for History education in basic education.",
          },
          {
            period: "2023",
            title: "Apple Distinguished Educator",
            text: "Recognition for creative and innovative uses of digital technologies in pedagogical practice.",
          },
          {
            period: "2021",
            title: "Master’s degree and educational product",
            text: "Development of an educational RPG about the Porrajmos as a resource for History teaching.",
          },
        ],
    projects: isPt
      ? projects
      : [
          {
            title: "Guardião do Seridó",
            category: "Virtual Reality game",
            description: "Virtual Reality game focused on valuing Indigenous cultural heritage and supporting History education in lower secondary school.",
          },
          {
            title: "Anne Frank House VR",
            category: "Case study",
            description: "Analysis of sensitive pasts, presence, spatiality, and historical interpretation in immersive environments.",
          },
          {
            title: "Bridge Virtual Exchange Hub",
            category: "Virtual exchange",
            description: "Proposal to connect schools from different countries through Virtual Reality, gamification, and global challenges.",
          },
        ],
    ui: {
      badge: isPt ? "Doutorado · Realidade Virtual · Humanidades Digitais" : "PhD · Virtual Reality · Digital Humanities",
      publicationsButton: isPt ? "Ver publicações" : "View publications",
      projectsButton: isPt ? "Conhecer projetos" : "View projects",
      contact: isPt ? "Contato" : "Contact",
      openMenu: isPt ? "Abrir menu" : "Open menu",
      aboutEyebrow: isPt ? "Sobre" : "About",
      aboutTitle: isPt ? "Uma trajetória entre escola, pesquisa e criação digital." : "A trajectory across school, research, and digital creation.",
      aboutText: isPt ? "Minha atuação articula prática docente, investigação acadêmica e desenvolvimento de recursos digitais para educação." : "My work connects teaching practice, academic research, and the development of digital resources for education.",
      academicProfile: isPt ? "Perfil acadêmico" : "Academic profile",
      academicText: isPt
        ? "Sou professor e pesquisador na área de Tecnologias Educacionais, com foco em Realidade Virtual, Humanidades Digitais e ensino de História. No doutorado, investigo como jogos, Realidade Virtual e recursos digitais podem contribuir para a aprendizagem, a interpretação histórica e a valorização de patrimônios culturais."
        : "I am a professor and researcher in Educational Technologies, with a focus on Virtual Reality, Digital Humanities, and History education. In my PhD, I investigate how games, Virtual Reality, and digital resources can contribute to learning, historical interpretation, and the appreciation of cultural heritage.",
      researchEyebrow: isPt ? "Pesquisa" : "Research",
      researchTitle: isPt ? "Interesses que conectam tecnologia, cultura e formação humana." : "Research interests connecting technology, culture, and education.",
      researchText: isPt ? "Meu trabalho parte da ideia de que experiências digitais podem ser espaços de investigação, memória, criação e reflexão crítica." : "My work starts from the idea that digital experiences can become spaces for inquiry, memory, creation, and critical reflection.",
      publicationsEyebrow: isPt ? "Publicações" : "Publications",
      publicationsTitle: isPt ? "Artigos, revisões e produções acadêmicas." : "Articles, reviews, and academic work.",
      publicationsText: isPt ? "Uma seleção inicial para divulgar trabalhos, apresentações e produtos educacionais. Substitua os textos e links pelos dados finais de cada publicação." : "An initial selection for sharing papers, presentations, and educational products. Replace the texts and links with the final data for each publication.",
      details: isPt ? "Ver detalhes" : "View details",
      projectsEyebrow: isPt ? "Projetos" : "Projects",
      projectsTitle: isPt ? "Jogos, projetos digitais e iniciativas em desenvolvimento." : "Games, digital projects, and initiatives in progress.",
      projectsText: isPt ? "Projetos que conectam pesquisa, escola, cultura e criação digital." : "Projects connecting research, school, culture, and digital creation.",
      contactTitle: isPt ? "Vamos conversar sobre educação, VR e pesquisa?" : "Let’s talk about education, VR, and research?",
      contactText: isPt ? "Estou aberto a colaborações acadêmicas, palestras, oficinas, projetos educacionais e parcerias envolvendo Realidade Virtual, jogos educacionais e humanidades digitais." : "I am open to academic collaborations, talks, workshops, educational projects, and partnerships involving Virtual Reality, educational games, and digital humanities.",
      location: isPt ? "Localização" : "Location",
      footerLeft: isPt ? "© 2026 Lucas Vale. Pesquisa, educação e Realidade Virtual." : "© 2026 Lucas Vale. Research, education, and Virtual Reality.",
      footerRight: isPt ? "Desenvolvido com estética liquid glass, animações suaves e layout responsivo." : "Designed with a liquid glass aesthetic, smooth animations, and a responsive layout.",
    },
  };
}
