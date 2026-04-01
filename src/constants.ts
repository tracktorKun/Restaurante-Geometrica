export type MenuCategory = 'Entradas' | 'Vegetariano' | 'Principal' | 'Especialidade para 2' | 'Acompanhamentos' | 'Sobremesas';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image?: string;
  tags?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  // Entradas
  {
    id: 'e1',
    name: 'Carpaccio de Novilho',
    description: 'Com lascas de queijo da ilha, rúcula e azeite de trufa.',
    price: '14€',
    category: 'Entradas'
  },
  {
    id: 'e2',
    name: 'Gambas ao Alho',
    description: 'Salteadas com malagueta, coentros e limão.',
    price: '16€',
    category: 'Entradas'
  },
  {
    id: 'e3',
    name: 'Tábua Geométrica',
    description: 'Seleção de enchidos e queijos DOP com compota artesanal.',
    price: '18€',
    category: 'Entradas'
  },
  {
    id: 'e4',
    name: 'Ovos Rotos',
    description: 'Com presunto ibérico e batata frita caseira.',
    price: '12€',
    category: 'Entradas'
  },
  // Vegetariano
  {
    id: 'v1',
    name: 'Risotto de Cogumelos',
    description: 'Mix de cogumelos silvestres, espargos e parmesão.',
    price: '17€',
    category: 'Vegetariano'
  },
  {
    id: 'v2',
    name: 'Caril de Grão e Espinafres',
    description: 'Com leite de coco, gengibre e arroz basmati.',
    price: '16€',
    category: 'Vegetariano'
  },
  {
    id: 'v3',
    name: 'Massa Pesto',
    description: 'Tagliatelle com pesto de manjericão e tomate seco.',
    price: '15€',
    category: 'Vegetariano'
  },
  // Principal
  {
    id: 'p1',
    name: 'Bacalhau com Broa',
    description: 'Lombo de bacalhau, crosta de broa de milho e batata a murro.',
    price: '22€',
    category: 'Principal'
  },
  {
    id: 'p2',
    name: 'Bife da Vazia',
    description: '300g de carne maturada, molho de pimenta verde e batata rústica.',
    price: '24€',
    category: 'Principal'
  },
  {
    id: 'p3',
    name: 'Polvo à Lagareiro',
    description: 'Tentáculos de polvo grelhados, batata assada e grelos salteados.',
    price: '23€',
    category: 'Principal'
  },
  {
    id: 'p4',
    name: 'Lombo de Salmão',
    description: 'Grelhado com crosta de sésamo e puré de batata doce.',
    price: '21€',
    category: 'Principal'
  },
  // Especialidade para 2
  {
    id: 's1',
    name: 'Arroz de Marisco Rico',
    description: 'Arroz caldoso com lagosta, gambas e amêijoas (2 pessoas).',
    price: '48€',
    category: 'Especialidade para 2'
  },
  {
    id: 's2',
    name: 'Chateaubriand',
    description: 'Corte nobre de novilho, legumes grelhados e molho béarnaise (2 pessoas).',
    price: '52€',
    category: 'Especialidade para 2'
  },
  {
    id: 's3',
    name: 'Cabrito Assado',
    description: 'No forno com batata assada e grelos salteados (2 pessoas).',
    price: '46€',
    category: 'Especialidade para 2'
  },
  // Acompanhamentos
  {
    id: 'a1',
    name: 'Batata Frita Caseira',
    description: 'Com ervas aromáticas e flor de sal.',
    price: '4€',
    category: 'Acompanhamentos'
  },
  {
    id: 'a2',
    name: 'Arroz de Feijão',
    description: 'Tradicional, cremoso e rico em sabor.',
    price: '5€',
    category: 'Acompanhamentos'
  },
  {
    id: 'a3',
    name: 'Salada Mista',
    description: 'Folhas verdes, tomate, cebola e vinagrete de mel.',
    price: '4€',
    category: 'Acompanhamentos'
  },
  {
    id: 'a4',
    name: 'Legumes Salteados',
    description: 'Mix de legumes da época com alho e azeite.',
    price: '5€',
    category: 'Acompanhamentos'
  },
  // Sobremesas
  {
    id: 'd1',
    name: 'Petit Gâteau',
    description: 'Coração derretido de chocolate com gelado de baunilha.',
    price: '7€',
    category: 'Sobremesas'
  },
  {
    id: 'd2',
    name: 'Cheesecake de Frutos Vermelhos',
    description: 'Base de bolacha artesanal e calda de framboesa.',
    price: '6€',
    category: 'Sobremesas'
  },
  {
    id: 'd3',
    name: 'Abade de Priscos',
    description: 'Pudim tradicional com sorvete de limão.',
    price: '7€',
    category: 'Sobremesas'
  },
  {
    id: 'd4',
    name: 'Tábua de Fruta',
    description: 'Fruta laminada da época.',
    price: '5€',
    category: 'Sobremesas'
  }
];

