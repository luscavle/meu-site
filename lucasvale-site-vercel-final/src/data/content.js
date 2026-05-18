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
    title:
      "Virtual reality platforms in education: a systematic literature review on features, pedagogical uses, and authoring potential",
    venue: "Revista Principia",
    year: "2026",
    description:
      "This article presents a Systematic Literature Review (SLR) on Virtual Reality (VR) platforms in education, covering studies published between 2022 and 2024. The objective was to identify functionalities, pedagogical uses, authoring potential, and the learning theories underpinning these practices [...].",
    link: "https://doi.org/10.18265/2447-9187a2026id9240",
  },
  {
    type: "Conference paper",
    title:
      "Ethical Considerations in Research on Virtual Reality Games — A Systematic Literature Review",
    venue: "27th Symposium on Virtual and Augmented Reality (SVR)",
    year: "2025",
    description:
      "This systematic literature review aimed to investigate how ethics has been addressed in studies on virtual reality (VR) games. The goal was to contribute to a deeper understanding of the ethical implications of these games and provide insights for establishing guidelines that promote more responsible practices in the field [...].",
    link: "https://doi.org/10.1109/SVR67689.2025.00049",
  },
  {
    type: "Conference proceedings",
    title: "Educational Virtual Reality Games with a Decolonial Focus",
    venue: "XXVII Simpósio de Realidade Virtual e Aumentada (SVR 2025)",
    year: "2025",
    description:
      "This paper presents the ongoing development of “Guardião do Seridó”, a narrative-driven Virtual Reality game for History education. Inspired by foundation myths from northeastern Brazil and Otxukayana cosmologies, the game proposes a decolonial reimagining of historical narratives by placing the player in the role of an indigenous character defending their territory [...].",
    link: "https://doi.org/10.5753/svr_estendido.2025.13831",
  },
  {
    type: "Conference paper",
    title:
      "Jogos de Realidade Virtual para a Educação: Uma Revisão Sistemática da Literatura em Teses e Dissertações Brasileiras",
    venue: "XXVII Simpósio de Realidade Virtual e Aumentada (SVR 2025)",
    year: "2025",
    description:
      "Esta pesquisa teve como objetivo realizar uma Revisão Sistemática da Literatura (RSL) para mapear e analisar teses e dissertações brasileiras (2019–2024) sobre a criação ou aplicação de jogos em RV na educação, identificando áreas de ensino, metodologias, desafios e impactos [...].",
    link: "https://doi.org/10.5753/sbgames.2025.10135",
  },
];

export const timeline = [
  {
    period: "2024 - Atual",
    title: "Doutorado e Experiência no Exterior",
    text:
      "Doutorado em Inovação em Tecnologias Educacionais pelo PPgITE/IMD/UFRN, com período sanduíche como Visiting Research Student na University of Bristol, no Reino Unido.",
  },
  {
    period: "2016 - 2017 / 2020 - 2021",
    title: "Mestrados",
    text:
      "Mestrado em Antropologia pela Universidade Federal da Paraíba e em Inovação em Tecnologias Educacionais pela Universidade Federal do Rio Grande do Norte.",
  },
  {
    period: "2025",
    title: "Especialização",
    text: "Especialização em Metodologias Ativas para a aprendizagem pela FABRAS.",
  },
  {
    period: "2012 - 2015",
    title: "Graduação",
    text: "Graduação em História Licenciatura pela Universidade Federal do Rio Grande do Norte.",
  },
];

export const experience = [
  {
    institution: "Maple Bear Natal",
    role: "Professor de História",
    period: "2022 — Atual",
    description:
      "Atuação no ensino de História com integração de tecnologias digitais, metodologias ativas e projetos interdisciplinares.",
  },
  {
    institution: "Escola MOV / Lápis de Cor",
    role: "Professor de História e Letramento Digital",
    period: "2019 — 2026",
    description:
      "Desenvolvimento de práticas pedagógicas voltadas ao ensino de História, cultura digital, pensamento crítico e criação de projetos educacionais com tecnologias digitais.",
  },
  {
    institution: "Z26 Meta Educação",
    role: "Apple Professional Learning Specialist",
    period: "2022 — 2024",
    description:
      "Formação de educadores e apoio a instituições no uso pedagógico de tecnologias Apple e metodologias ativas.",
  },
  {
    institution: "Recanto Desenvolvimento",
    role: "Professor de Consciência Digital",
    period: "2021 — 2023",
    description:
      "Desenvolvimento de atividades voltadas à cidadania digital, segurança online e uso ético da tecnologia com crianças e jovens.",
  },
];

export const projects = [
  {
    title: "Apple Distinguished Educator",
    category: "Reconhecimento profissional",
    image: "/ade.jpg",
    link: "https://www.instagram.com/p/CthdRoav26u/?igsh=MWxxaHEwODd6dDNqNg==",
    description:
      "Reconhecimento internacional recebido em 2023 pela atuação com tecnologias educacionais, inovação pedagógica e integração de recursos digitais em contextos de ensino.",
  },
  {
    title: "Palestras e eventos",
    category: "Divulgação e formação",
    image: "/palestra.jpg",
    link: "https://www.instagram.com/reel/DMlMWHZpG1_/?igsh=bGEwZWc1Z2RsZm5w",
    description:
      "Participação em eventos educacionais com palestras sobre Realidade Virtual, aprendizagem imersiva, inovação pedagógica e tecnologias educacionais.",
  },
  {
    title: "Formação de professores",
    category: "Desenvolvimento docente",
    image: "/formacao.jpg",
    link: "https://www.instagram.com/reel/DFOZdNyuY80/?igsh=MWJhdDNtazFvYXVhNg==",
    description:
      "Atuação em formações docentes voltadas ao uso pedagógico de tecnologias digitais, metodologias ativas e práticas educacionais inovadoras.",
  },
  {
    title: "Práticas em sala de aula",
    category: "Ensino e aprendizagem",
    image: "/aulas-tecnologia.jpg",
    link: "https://www.instagram.com/reel/C8Z2vv_xPrU/?igsh=MWZha3U5cnpsNXpydA==",
    description:
      "Atuação docente na Educação Básica, com desenvolvimento de aulas, projetos interdisciplinares e estratégias pedagógicas que integram História, cultura digital e tecnologias educacionais.",
  },
  {
    title: "Criação de jogos educacionais",
    category: "Jogo educacional",
    image: "/birkenau.jpg",
    link: "https://pluni.imd.ufrn.br/pluni/165/visualizarProduto",
    description:
      "Desenvolvimento de jogos e experiências interativas voltadas ao ensino. Entre os projetos desenvolvidos está o RPG educacional A Última Canção de Birkenau, criado no contexto do mestrado para abordar o genocídio cigano no ensino de História.",
  },
  {
    title: "Autoria de livros na área da educação",
    category: "Livro",
    image: "/livro.jpg",
    link: "https://www.amazon.co.uk/Educa%C3%A7%C3%A3o-Cri-Ativa-estrat%C3%A9gias-Portuguese-ebook/dp/B0CW19W71S",
    description:
      "Autor do livro Educação (Cri)Ativa: um guia de estratégias para aulas incríveis, voltado ao desenvolvimento de práticas pedagógicas mais criativas, participativas e conectadas às demandas contemporâneas da educação.",
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
      role: isPt ? profile.role : "Professor and researcher in History and Educational Technologies",
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
          { value: "8+", label: "years in education" },
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
            description:
              "Research and development of Virtual Reality experiences for educational contexts.",
          },
          {
            icon: Gamepad2,
            title: "Games and learning",
            description:
              "Development of educational games and gamified learning experiences.",
          },
          {
            icon: BookOpen,
            title: "History education",
            description:
              "Use of active learning methodologies and educational technologies in History teaching.",
          },
          {
            icon: Globe2,
            title: "Digital humanities",
            description:
              "Intersection of culture, memory, heritage, academic research and digital production in connected environments.",
          },
        ],

    publications: isPt
      ? publications
      : [
          {
            type: "Journal article",
            title:
              "Virtual reality platforms in education: a systematic literature review on features, pedagogical uses, and authoring potential",
            venue: "Revista Principia",
            year: "2026",
            description:
              "This article presents a Systematic Literature Review (SLR) on Virtual Reality (VR) platforms in education, covering studies published between 2022 and 2024. The objective was to identify functionalities, pedagogical uses, authoring potential, and the learning theories underpinning these practices [...].",
            link: "https://doi.org/10.18265/2447-9187a2026id9240",
          },
          {
            type: "Conference paper",
            title:
              "Ethical Considerations in Research on Virtual Reality Games — A Systematic Literature Review",
            venue: "27th Symposium on Virtual and Augmented Reality (SVR)",
            year: "2025",
            description:
              "This systematic literature review aimed to investigate how ethics has been addressed in studies on virtual reality (VR) games. The goal was to contribute to a deeper understanding of the ethical implications of these games and provide insights for establishing guidelines that promote more responsible practices in the field [...].",
            link: "https://doi.org/10.1109/SVR67689.2025.00049",
          },
          {
            type: "Conference proceedings",
            title: "Educational Virtual Reality Games with a Decolonial Focus",
            venue: "XXVII Simpósio de Realidade Virtual e Aumentada (SVR 2025)",
            year: "2025",
            description:
              "This paper presents the ongoing development of “Guardião do Seridó”, a narrative-driven Virtual Reality game for History education. Inspired by foundation myths from northeastern Brazil and Otxukayana cosmologies, the game proposes a decolonial reimagining of historical narratives by placing the player in the role of an indigenous character defending their territory [...].",
            link: "https://doi.org/10.5753/svr_estendido.2025.13831",
          },
          {
            type: "Conference paper",
            title:
              "Virtual Reality Games for Education: A Systematic Literature Review of Brazilian Theses and Dissertations",
            venue: "XXVII Simpósio de Realidade Virtual e Aumentada (SVR 2025)",
            year: "2025",
            description:
              "This study presents a Systematic Literature Review (SLR) mapping and analysing Brazilian theses and dissertations (2019–2024) on the creation or application of VR games in education, identifying teaching areas, methodologies, challenges, and impacts [...].",
            link: "https://doi.org/10.5753/sbgames.2025.10135",
          },
        ],

    timeline: isPt
      ? timeline
      : [
          {
            period: "2024 – Present",
            title: "Doctoral Research and International Experience",
            text:
              "PhD candidate in Innovation in Educational Technologies at PPgITE/IMD/UFRN, with a visiting research period at the University of Bristol as a Visiting Research Student.",
          },
          {
            period: "2016 – 2017 / 2020 – 2021",
            title: "Master’s Degrees",
            text:
              "Master’s degree in Anthropology from the Federal University of Paraíba and Master’s degree in Innovation in Educational Technologies from the Federal University of Rio Grande do Norte.",
          },
          {
            period: "2025",
            title: "Postgraduate Specialisation",
            text: "Postgraduate specialisation in Active Learning Methodologies from FABRAS.",
          },
          {
            period: "2012 – 2015",
            title: "Undergraduate Degree",
            text:
              "Bachelor’s degree in History Education from the Federal University of Rio Grande do Norte.",
          },
        ],

    experience: isPt
      ? experience
      : [
          {
            institution: "Maple Bear Natal",
            role: "History Teacher",
            period: "2022 — Present",
            description:
              "History teaching with the integration of digital technologies, active learning methodologies, and interdisciplinary projects.",
          },
          {
            institution: "Escola MOV / Lápis de Cor",
            role: "History and Digital Literacy Teacher",
            period: "2019 — 2026",
            description:
              "Development of pedagogical practices focused on History teaching, digital culture, critical thinking, and educational projects with digital technologies.",
          },
          {
            institution: "Z26 Meta Educação",
            role: "Apple Professional Learning Specialist",
            period: "2022 — 2024",
            description:
              "Teacher training and institutional support for the pedagogical use of Apple technologies and active learning methodologies.",
          },
          {
            institution: "Recanto Desenvolvimento",
            role: "Digital Awareness Teacher",
            period: "2021 — 2023",
            description:
              "Development of activities focused on digital citizenship, online safety, and the ethical use of technology with children and young people.",
          },
        ],

    projects: isPt
  ? projects
  : [
      {
        title: "Apple Distinguished Educator",
        category: "Professional recognition",
        image: "/ade.jpg",
        link: "https://www.instagram.com/p/CthdRoav26u/?igsh=MWxxaHEwODd6dDNqNg==",
        description:
          "International recognition received in 2023 for work with educational technologies, pedagogical innovation, and the integration of digital resources in teaching contexts.",
      },
      {
        title: "Lectures and events",
        category: "Dissemination and training",
        image: "/palestra.jpg",
        link: "https://www.instagram.com/reel/DMlMWHZpG1_/?igsh=bGEwZWc1Z2RsZm5w",
        description:
          "Participation in educational events with lectures on Virtual Reality, immersive learning, pedagogical innovation, and educational technologies.",
      },
      {
        title: "Teacher training",
        category: "Professional development",
        image: "/formacao.jpg",
        link: "https://www.instagram.com/reel/DFOZdNyuY80/?igsh=MWJhdDNtazFvYXVhNg==",
        description:
          "Teacher education initiatives focused on the pedagogical use of digital technologies, active methodologies, and innovative educational practices.",
      },
      {
        title: "Classroom practice",
        category: "Teaching and learning",
        image: "/aulas-tecnologia.jpg",
        link: "https://www.instagram.com/reel/C8Z2vv_xPrU/?igsh=MWZha3U5cnpsNXpydA==",
        description:
          "Teaching practice in Basic Education, with the development of lessons, interdisciplinary projects, and pedagogical strategies integrating History, digital culture, and educational technologies.",
      },
      {
        title: "Educational game development",
        category: "Educational game",
        image: "/birkenau.jpg",
        link: "https://pluni.imd.ufrn.br/pluni/165/visualizarProduto",
        description:
          "Development of games and interactive experiences for teaching. One of these projects is the educational RPG A Última Canção de Birkenau, created during my master’s research to address the Romani genocide in History education.",
      },
      {
        title: "Book authorship in education",
        category: "Publication",
        image: "/livro.jpg",
        link: "https://www.amazon.co.uk/Educa%C3%A7%C3%A3o-Cri-Ativa-estrat%C3%A9gias-Portuguese-ebook/dp/B0CW19W71S",
        description:
          "Author of the book Educação (Cri)Ativa: um guia de estratégias para aulas incríveis, focused on creative, participatory, and contemporary pedagogical practices.",
      },
    ],

    ui: {
      badge: isPt
        ? "Doutorado · Realidade Virtual · Humanidades Digitais"
        : "PhD · Virtual Reality · Digital Humanities",

      publicationsButton: isPt ? "Ver publicações" : "View publications",
      projectsButton: isPt ? "Conhecer projetos" : "View projects",
      contact: isPt ? "Contato" : "Contact",
      openMenu: isPt ? "Abrir menu" : "Open menu",

      aboutEyebrow: isPt ? "Sobre" : "About",
      aboutTitle: isPt
        ? "Perfil acadêmico e profissional"
        : "Academic and professional profile",
      aboutText: isPt
        ? "Atuação na educação básica, na pesquisa acadêmica e no desenvolvimento de projetos com tecnologias digitais e experiências imersivas."
        : "Work in basic education, academic research and the development of projects involving digital technologies and immersive experiences.",

      academicProfile: isPt ? "Perfil acadêmico" : "Academic profile",
      academicText: isPt
        ? "Sou professor de História e Letramento Digital, graduado pela Universidade Federal do Rio Grande do Norte (UFRN), com mestrados em Antropologia pela Universidade Federal da Paraíba (PPGA/UFPB) e em Inovação em Tecnologias Educacionais pelo PPgITE/IMD/UFRN. Atualmente, sou doutorando em Inovação em Tecnologias Educacionais e realizo doutorado sanduíche como Visiting Research Student na University of Bristol, no Reino Unido, junto ao Department of Classics and Ancient History e ao Bristol Digital Game Lab (BDGL). Atuo como professor-pesquisador na educação básica, articulando ensino de História, tecnologias imersivas, jogos digitais e metodologias ativas. Minha pesquisa investiga como experiências imersivas em Realidade Virtual representam o passado e quais potencialidades e limites apresentam para a interpretação histórica de estudantes, com atenção especial aos passados sensíveis."
        : "I am a History and Digital Literacy teacher, graduated from the Federal University of Rio Grande do Norte (UFRN), with Master’s degrees in Anthropology from the Federal University of Paraíba (PPGA/UFPB) and in Innovation in Educational Technologies from PPgITE/IMD/UFRN. I am currently a PhD candidate in Innovation in Educational Technologies and undertaking a sandwich PhD as a Visiting Research Student at the University of Bristol, United Kingdom, linked to the Department of Classics and Ancient History and the Bristol Digital Game Lab (BDGL). I work as a teacher-researcher in basic education, articulating History education, immersive technologies, digital games, and active learning methodologies. My research investigates how immersive Virtual Reality experiences represent the past and what possibilities and limits they present for students’ historical interpretation, with particular attention to sensitive pasts.",

      researchEyebrow: isPt ? "Formação acadêmica" : "Academic background",
      researchTitle: isPt
        ? "Graduação, pós-graduação e experiência internacional."
        : "Undergraduate studies, graduate degrees and international experience.",
      researchText: isPt
        ? "Síntese da formação universitária, reunindo graduação, especialização, mestrados, doutorado e período de pesquisa no exterior."
        : "A concise overview of university education, including undergraduate studies, specialisation, master’s degrees, doctoral research and a research period abroad.",

      experienceEyebrow: isPt ? "Experiência" : "Experience",
      experienceTitle: isPt ? "Atuação profissional" : "Professional experience",
      experienceText: isPt
        ? "Experiências em ensino de História, Letramento Digital, formação de educadores e projetos com tecnologias educacionais."
        : "Experience in History teaching, Digital Literacy, teacher training, and educational technology projects.",

      publicationsEyebrow: isPt ? "Publicações" : "Publications",
      publicationsTitle: isPt
        ? "Produção acadêmica e científica."
        : "Academic and scientific production.",
      publicationsText: isPt
        ? "Artigos, revisões sistemáticas, trabalhos em eventos e pesquisas desenvolvidas nas áreas de Educação, História e Tecnologias Imersivas."
        : "Artigos, revisões sistemáticas, trabalhos em eventos e pesquisas desenvolvidas nas áreas de Educação, História e Tecnologias Imersivas.",
      details: isPt ? "Ver detalhes" : "View details",

    projectsEyebrow: isPt ? "Atuação Educacional" : "Educational practices",
projectsTitle: isPt
  ? "Atuação, produção e reconhecimento profissional."
  : "Professional work, production and recognition.",
projectsText: isPt
   ? "Experiências relacionadas ao ensino, formação docente, palestras, tecnologias educacionais, criação de jogos e produção de recursos voltados à educação."
  : "Experiences related to teaching, teacher education, lectures, educational technologies, game development and the production of resources for education.",
      contactTitle: isPt
        ? "Vamos conversar sobre educação, VR e pesquisa?"
        : "Let’s talk about education, VR, and research?",
      contactText: isPt
        ? "Estou aberto a colaborações acadêmicas, palestras, oficinas, projetos educacionais e parcerias envolvendo Realidade Virtual, jogos educacionais e humanidades digitais."
        : "I am open to academic collaborations, talks, workshops, educational projects, and partnerships involving Virtual Reality, educational games, and digital humanities.",

      location: isPt ? "Localização" : "Location",
      footerLeft: isPt
        ? "© 2026 Lucas Vale."
        : "© 2026 Lucas Vale.",
      footerRight: isPt
        ? "Desenvolvido com apoio do ChatGPT — GPT-5.5."
        : "Developed with support from ChatGPT — GPT-5.5.",
    },
  };
}
