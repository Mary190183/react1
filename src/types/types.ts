export type DataPlants = {
  plants: DataPlants[];
};

export type DataPlant = {
  id: number;
  img: string;
  common: string;
  latin: string;
  description: string;
  categories: string;
  plants?: DataPlant[];
};

export type DataRadios = {
  radio: DataPlants[];
};

export type DataRadio = {
  id: number;
  name: string;
  image: string;
};

export interface DataFormCard {
  id: number;
  title: string;
  select: string;
  file: File | undefined;
  date: string;
  check: boolean;
  radio: string;
  submit: boolean;
}

export interface ApiResponse {
  limit: number;
  plants: DataPlant[];
  skip: number;
  total: number;
}
