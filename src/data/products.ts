import image1 from "../assets/images/4453459-tissu-wax-africain-ankara-wax-100-coton-motif-disques-ti-1.jpeg"
import image2 from "../assets/images/460501013.png"
import image3 from "../assets/images/A2Y7JXWZ-large.jpg"
import image4 from "../assets/images/AF-3989_300x300.jpg"
import image5 from "../assets/images/AF-4009.jpg"
import image6 from "../assets/images/OT-3009-2_1024x1024.jpg"

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
    image: image1,
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
    image: image2,
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
    image: image3,
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
    image: image4,
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
    image: image5,
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
    image: image6,
    inStock: false
  }
];

export const categories = ["Tous", "Wax", "Kente", "Bogolan", "Ankara"];
export const sizes = ["Tous", "4 yards", "5 yards", "6 yards"];
export const colors = ["Tous", "Bleu", "Rouge", "Orange", "Marron", "Multicolore", "Or"];
