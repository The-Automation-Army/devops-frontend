export interface Animal {
  id?: string;
  name: string;
  gender: string;
  height: string;
  weight: string;
  category: string;
  diet: string;
  habitatId: number;
}

export type AnimalRequest = Omit<Animal, 'id'>;

export const initialAnimalState: Animal = {
  id: '',
  name: '',
  gender: '',
  height: '',
  weight: '',
  category: '',
  diet: '',
  habitatId: 0,
};

export const initialAnimalRequest: AnimalRequest = {
  name: '',
  gender: '',
  height: '',
  weight: '',
  category: '',
  diet: '',
  habitatId: 0,
};
