// products.ts

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  img: string;
}

export interface ICategory {
  [categoryName: string]: IProduct[];
}

interface IOffers {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  img: string;
}

interface IProductsData {
  categories: ICategory;
  offers: IOffers[];
}

const productsData: IProductsData = {
  categories: {
    "Bebidas Mágicas": [
      {
        "id": 1,
        "name": "Café Mágico",
        "description": "Um elixir que desperta sua imaginação.",
        "price": 6.00,
        "discountPercentage": 0,
        "img": "1.PNG"
      },
      {
        "id": 2,
        "name": "Latte Encantado",
        "description": "A poção da criatividade.",
        "price": 8.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 3,
        "name": "Chá das Fadas",
        "description": "Uma infusão mágica com sabores encantados.",
        "price": 5.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 4,
        "name": "Poção de Chocolate Quente",
        "description": "Uma bebida que aquece o coração e a alma.",
        "price": 7.00,
        "discountPercentage": 0,
        "img": ""
      }
    ],
    "Bolos Mágicos": [
      {
        "id": 6,
        "name": "Bolo Mágico",
        "description": "Delicioso bolo com segredos mágicos.",
        "price": 10.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 7,
        "name": "Cookies Encantados",
        "description": "Bolinhos crocantes com toque mágico.",
        "price": 5.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 8,
        "name": "Torta de Maçã Encantada",
        "description": "Uma torta que lembra histórias de fadas.",
        "price": 9.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 9,
        "name": "Cupcakes de Arco-Íris",
        "description": "Deliciosos cupcakes com cores mágicas.",
        "price": 6.00,
        "discountPercentage": 0,
        "img": ""
      }
    ],
    "Doces Encantados": [
      {
        "id": 10,
        "name": "Brigadeiro das Fadas",
        "description": "Um doce mágico que derrete na boca.",
        "price": 2.50,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 11,
        "name": "Mousse de Lua Cheia",
        "description": "Uma sobremesa celestial para os amantes da lua.",
        "price": 4.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 12,
        "name": "Trufas da Floresta Encantada",
        "description": "Trufas com recheios misteriosos da floresta.",
        "price": 3.50,
        "discountPercentage": 0,
        "img": ""
      }
    ],
    "Sanduíches Mágicos": [
      {
        "id": 13,
        "name": "Sanduíche da Floresta Encantada",
        "description": "Um sanduíche recheado com ingredientes mágicos da floresta.",
        "price": 8.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 14,
        "name": "Sanduíche das Fadas",
        "description": "Um sanduíche que faz você sentir a magia das fadas.",
        "price": 7.00,
        "discountPercentage": 0,
        "img": ""
      },
      {
        "id": 15,
        "name": "Sanduíche de Magia Mediterrânea",
        "description": "Um sanduíche inspirado na magia do Mediterrâneo.",
        "price": 9.00,
        "discountPercentage": 0,
        "img": ""
      }
    ]
  },
  offers: [
    {
      "id": 16,
      "name": "Poção da Felicidade",
      "description": "Uma poção mágica para dias alegres.",
      "price": 12.00,
      "discountPercentage": 15,
      "img": ""
    },
    {
      "id": 18,
      "name": "Chá de Estrelas Cadentes",
      "description": "Um chá com o brilho das estrelas.",
      "price": 8.00,
      "discountPercentage": 20,
      "img": ""
    },
    {
      "id": 17,
      "name": "Café das Fadas Perdidas",
      "description": "Uma mistura secreta das fadas.",
      "price": 7.00,
      "discountPercentage": 10,
      "img": ""
    }
  ]
};

export { productsData };
