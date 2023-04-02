export type DataPlants = {
  plants: DataPlants[];
};

export type DataPlant = {
  id: number;
  name: string;
  description: string;
  price: number;
  watches: number;
  image: string;
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
  file: string;
  date: string;
  check: boolean;
  radio: string;
}
