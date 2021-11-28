export interface Cocktail {
    id: number;
    name: string;
    ingredients: string[] | any;
    instructions?: string[];
    tags?: string[]
  }