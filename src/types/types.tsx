export type DataPlants = {
  plants: DataPlants[];
};

export type DataPlant = {
  id: number;
  img: string;
  common: string;
  climate: string;
  latin: string;
  family: string;
  categories: string;
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
