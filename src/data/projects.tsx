import bananaTvImage from '../assets/images/projects/banana_tv.png'
import coffeeCodeImage from '../assets/images/projects/coffee_code.png'
import lojaJudoImage from '../assets/images/projects/loja_judo.jpeg'
import receituarioBackImage from '../assets/images/projects/receituario_back.png'
import taroOnlineImage from '../assets/images/projects/taro_online.jpg'
import zayshaArtsImage from '../assets/images/projects/zaysha_arts.png'

export const projects = [
  {
    id: 1,

    title: 'Banana TV',

    description:
      'Projeto frontend moderno com foco em interface visual e experiência do usuário.',

    image: bananaTvImage,

    stack: [
      'React',
      'TypeScript',
      'Styled Components'
    ],

    github: 'https://github.com/Tatidev78/Streaming',

    live: 'https://streaming-two-beta.vercel.app/'
  },

  {
    id: 2,

    title: 'Coffee Code',

    description:
      'Landing page moderna inspirada em tecnologia e design minimalista.',

    image: coffeeCodeImage,

    stack: [
      'React',
      'CSS',
      'JavaScript'
    ],

    github: 'https://github.com/Tatidev78/love_coffee_code',

    live: 'https://love-coffee-code.vercel.app/'
  },

  {
    id: 3,

    title: 'Loja Judô',

    description:
      'E-commerce desenvolvido com foco em organização visual e navegação intuitiva.',

    image: lojaJudoImage,

    stack: [
      'React',
      'Node.js',
      'Styled Components'
    ],

    github: 'https://github.com/Tatidev78/Projeto_loja_esportiva',

    live: 'https://projeto-loja-esportiva.vercel.app/'
  },

  {
    id: 4,

    title: 'Meu Receituário',

    description:
      'Sistema backend de receitas utilizando Java, Spring Boot e arquitetura MVC.',

    image: receituarioBackImage,

    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL'
    ],

    github: '',

    live: ''
  },

  {
    id: 5,

    title: 'Tarô Online',

    description:
      'Aplicação temática com foco em experiência imersiva e interação do usuário.',

    image: taroOnlineImage,

    stack: [
      'React',
      'TypeScript',
      'Styled Components'
    ],

    github: 'https://github.com/Tatidev78/Projeto_Taro_att',

    live: 'https://projeto-taro.vercel.app/'
  },

  {
    id: 6,

    title: 'Zaysha Arts',

    description:
      'Portfolio artístico moderno com identidade visual personalizada.',

    image: zayshaArtsImage,

    stack: [
      'React',
      'CSS',
      'JavaScript'
    ],

    github: '',

    live: ''
  }
]