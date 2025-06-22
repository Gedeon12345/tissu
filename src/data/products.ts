
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  size: string;
  color: string;
  image: string;
  inStock: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tissu Wax Traditionnel",
    description: "Magnifique tissu wax aux motifs géométriques traditionnels",
    price: 15000,
    category: "Wax",
    size: "6 yards",
    color: "Bleu",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500",
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Kente Premium",
    description: "Tissu Kente authentique aux couleurs vibrantes",
    price: 25000,
    category: "Kente",
    size: "4 yards",
    color: "Multicolore",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500",
    inStock: true
  },
  {
    id: 3,
    name: "Bogolan Artisanal",
    description: "Tissu bogolan fait main avec des motifs ancestraux",
    price: 20000,
    category: "Bogolan",
    size: "5 yards",
    color: "Marron",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500",
    inStock: true,
    isNew: true
  },
  {
    id: 4,
    name: "Ankara Fashion",
    description: "Tissu Ankara moderne pour créations contemporaines",
    price: 18000,
    category: "Ankara",
    size: "6 yards",
    color: "Orange",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500",
    inStock: true
  },
  {
    id: 5,
    name: "Wax Super Deluxe",
    description: "Tissu wax de haute qualité aux finitions impeccables",
    price: 22000,
    category: "Wax",
    size: "6 yards",
    color: "Rouge",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500",
    inStock: true
  },
  {
    id: 6,
    name: "Kente Royal",
    description: "Tissu Kente aux motifs royaux traditionnels",
    price: 30000,
    category: "Kente",
    size: "4 yards",
    color: "Or",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500",
    inStock: false
  }
];

export const categories = ["Tous", "Wax", "Kente", "Bogolan", "Ankara"];
export const sizes = ["Tous", "4 yards", "5 yards", "6 yards"];
export const colors = ["Tous", "Bleu", "Rouge", "Orange", "Marron", "Multicolore", "Or"];
