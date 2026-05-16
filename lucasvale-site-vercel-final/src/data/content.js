import { BookOpen, Layers3, Gamepad2, Globe2 } from "lucide-react";

export const profile = {
  name: "Lucas Vale",
  role: "Professor e pesquisador em História e Tecnologias Educacionais",
  location: "Natal, RN · Bristol, UK",
  email: "lucas.vale.103@ufrn.edu.br",
  shortBio:
    "Doutorando em Inovação em Tecnologias Educacionais, professor de História e Letramento Digital, com atuação em Realidade Virtual, jogos educacionais, humanidades digitais e ensino de História.",
  tags: ["Realidade Virtual", "Humanidades Digitais", "Jogos Educacionais", "Ensino de História"],
};

export const profileLinks = [
  { label: "Lattes", href: "http://lattes.cnpq.br/8698223241960222" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=cDiGLwMAAAAJ&hl=pt-BR" },
  { label: "ORCID", href: "https://orcid.org/0009-0003-3261-8139" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-vale-vr/" },
  { label: "Instagram", href: "https://www.instagram.com/prof.lucasvale/" },
];

export const stats = [
  { value: "8+", label: "anos em educação" },
  { value: "VR/XR", label: "foco de pesquisa" },
  { value: "PhD", label: "doutorado em andamento" },
  { value: "ADE", label: "Apple Distinguished Educator" },
];

export const expertise = [
  {
    icon: Layers3,
    title: "Tecnologias imersivas",
    description:
      "Pesquisa e desenvolvimento de experiências em Realidade Virtual para contextos educacionais.",
  },
  {
    icon: Gamepad2,
    title: "Jogos e aprendizagem",
    description:
      "Criação de jogos educacionais e experiências de aprendizagem gamificadas.",
  },
  {
    icon: BookOpen,
    title: "Ensino de História",
    description:
      "Uso de metodologias ativas e tecnologias educacionais para promover uma educação significativa.",
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
    type: "Journal article",
    title: "Virtual reality platforms in education: a systematic literature review on features, pedagogical uses, and authoring potential",
    venue: "Revista Principia",
    year: "2026",
    description:
      "This article presents a Systematic Literature Review (SLR) on Virtual Reality (VR) platforms in education, covering studies published between 2022 and 2024. The objective was to identify functionalities, pedagogical uses, authoring potential, and the learning theories underpinning these practices [...].",
     link: "https://doi.org/10.18265/2447-9187a2026id9240"
  },
  {
    type: "Conference paper",
    title: "Ethical Considerations in Research on Virtual Reality Games — A Systematic Literature Review",
    venue: "27th Symposium on Virtual and Augmented Reality (SVR)",
    year: "2025",
    description:
      "This systematic literature review aimed to investigate how ethics has been addressed in studies on virtual reality (VR) games. The goal was to contribute to a deeper understanding of the ethical implications of these games and provide insights for establishing guidelines that promote more responsible practices in the field [...]. ",
    link: "https://doi.org/10.1109/SVR67689.2025.00049"
  },
  {
    type: "Conference proceedings",
    title: "Educational Virtual Reality Games with a Decolonial Focus",
    venue: "XXVII Simpósio de Realidade Virtual e Aumentada (SVR 2025)",
    year: "2025",
    description:
      "This paper presents the ongoing development of “Guardião do Seridó”, a narrative-driven Virtual Reality game for History education. Inspired by foundation myths from northeastern Brazil and Otxukayana cosmologies, the game proposes a decolonial reimagining of historical narratives by placing the player in the role of an indigenous character defending their territory [...].",
  link: "https://doi.org/10.5753/svr_estendido.2025.13831"
  },
   {
    type: "Conference paper",
    title: "Jogos de Realidade Virtual para a Educação: Uma Revisão Sistemática da Literatura em Teses e Dissertações Brasileiras",
    venue: "XXVII Simpósio de Realidade Virtual e Aumentada (SVR 2025)",
    year: "2025",
    description:
      "Esta pesquisa teve como objetivo realizar uma Revisão Sistemática da Literatura (RSL) para mapear e analisar teses e dissertações brasileiras (2019–2024) sobre a criação ou aplicação de jogos em RV na educação, identificando áreas de ensino, metodologias, desafios e impactos [...].",
  link: "https://doi.org/10.5753/sbgames.2025.10135"
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
  src: "/lucas.jpg",
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
        ? "Sou professor de História e Letramento Digital, graduado pela Universidade Federal do Rio Grande do Norte (UFRN), com mestrados em Antropologia pela Universidade Federal da Paraíba (PPGA/UFPB) e em Inovação em Tecnologias Educacionais pelo PPgITE/IMD/UFRN. Atualmente, sou doutorando em Inovação em Tecnologias Educacionais e realizo doutorado sanduíche como Visiting Research Student na University of Bristol, no Reino Unido, junto ao Department of Classics and Ancient History e ao Bristol Digital Game Lab (BDGL). Atuo como professor-pesquisador na educação básica, articulando ensino de História, tecnologias imersivas, jogos digitais e metodologias ativas. Minha pesquisa investiga como experiências imersivas em Realidade Virtual representam o passado e quais potencialidades e limites apresentam para a interpretação histórica de estudantes, com atenção especial aos passados sensíveis."
  : "I am a History and Digital Literacy teacher, graduated from the Federal University of Rio Grande do Norte (UFRN), with Master’s degrees in Anthropology from the Federal University of Paraíba (PPGA/UFPB) and in Innovation in Educational Technologies from PPgITE/IMD/UFRN. I am currently a PhD candidate in Innovation in Educational Technologies and undertaking a sandwich PhD as a Visiting Research Student at the University of Bristol, United Kingdom, linked to the Department of Classics and Ancient History and the Bristol Digital Game Lab (BDGL). I work as a teacher-researcher in basic education, articulating History education, immersive technologies, digital games, and active learning methodologies. My research investigates how immersive Virtual Reality experiences represent the past and what possibilities and limits they present for students’ historical interpretation, with particular attention to sensitive pasts.",
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
