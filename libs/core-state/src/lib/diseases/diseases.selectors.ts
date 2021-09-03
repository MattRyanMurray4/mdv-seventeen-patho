import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Disease, emptyDisease } from '@patho/api-interfaces';
import {
  DISEASES_FEATURE_KEY,
  DiseasesState,
  diseasesAdapter,
} from './diseases.reducer';

// Lookup the 'Diseases' feature state managed by NgRx
export const getDiseasesState =
  createFeatureSelector<DiseasesState>(DISEASES_FEATURE_KEY);

const { selectAll, selectEntities } = diseasesAdapter.getSelectors();

export const getDiseasesLoaded = createSelector(
  getDiseasesState,
  (state: DiseasesState) => state.loaded
);

export const getDiseasesError = createSelector(
  getDiseasesState,
  (state: DiseasesState) => state.error
);

export const getAllDiseases = createSelector(
  getDiseasesState,
  (state: DiseasesState) => selectAll(state)
);

export const getDiseasesEntities = createSelector(
  getDiseasesState,
  (state: DiseasesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDiseasesState,
  (state: DiseasesState) => state.selectedId
);

export const getSelected = createSelector(
  getDiseasesEntities,
  getSelectedId,
  (entities, selectedId) =>
    (selectedId ? entities[selectedId] : emptyDisease) as Disease
);
