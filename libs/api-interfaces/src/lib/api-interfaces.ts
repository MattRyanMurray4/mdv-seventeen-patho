export interface Disease {
  id: string;
  name: string;
  cause: string;
  populationEffected: string;
  treatment: string;
}

export const emptyDisease = {
  id: '',
  name: '',
  cause: '',
  populationEffected: '',
  treatment: '',
};
