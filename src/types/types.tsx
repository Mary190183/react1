export type DataPlants = {
  plants: DataPlants[];
};

export type DataPlant = {
  id: number;
  climate: string;
  img: string;
  common: string;
  latin: string;
  family: string;
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
