import { ActionReducerMap } from '@ngrx/store';
import {
  diseasesReducer,
  DiseasesState,
  DISEASES_FEATURE_KEY,
} from './diseases/diseases.reducer';

export interface AppState {
  [DISEASES_FEATURE_KEY]: DiseasesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [DISEASES_FEATURE_KEY]: diseasesReducer,
};
