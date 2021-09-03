import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Disease } from '@patho/api-interfaces';
import * as DiseasesActions from './diseases.actions';

export const DISEASES_FEATURE_KEY = 'diseases';

export interface DiseasesState extends EntityState<Disease> {
  selectedId?: string | number; // which Diseases record has been selected
  loaded: boolean; // has the Diseases list been loaded
  error?: string | null; // last known error (if any)
}

export interface DiseasesAction extends Action {
  error: string;
}

export interface DiseasesPartialState {
  readonly [DISEASES_FEATURE_KEY]: DiseasesState;
}

export const diseasesAdapter: EntityAdapter<Disease> =
  createEntityAdapter<Disease>();

export const initialState: DiseasesState = diseasesAdapter.getInitialState({
  loaded: false,
});

const setLoading = (state: DiseasesState) => ({
  ...state,
  loaded: false,
  error: null,
});

const setFailure = (state: DiseasesState, { error }: DiseasesAction) => ({
  ...state,
  error,
});

const _diseasesReducer = createReducer(
  initialState,
  on(
    DiseasesActions.loadDisease,
    DiseasesActions.loadDiseases,
    DiseasesActions.createDisease,
    DiseasesActions.updateDisease,
    DiseasesActions.deleteDisease,
    setLoading
  ),
  on(
    DiseasesActions.loadDiseaseFailure,
    DiseasesActions.loadDiseasesFailure,
    DiseasesActions.createDiseaseFailure,
    DiseasesActions.updateDiseaseFailure,
    DiseasesActions.deleteDiseaseFailure,
    setFailure
  ),
  on(DiseasesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DiseasesActions.loadDiseasesSuccess, (state, { diseases }) =>
    diseasesAdapter.setAll(diseases, { ...state, loaded: true })
  ),
  on(DiseasesActions.loadDiseasesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(DiseasesActions.createDiseaseSuccess, (state, { disease }) =>
    diseasesAdapter.addOne(disease, { ...state, loaded: true })
  ),
  on(DiseasesActions.selectDisease, (state, { diseaseId }) => ({
    ...state,
    selectedId: diseaseId,
  })),
  on(DiseasesActions.loadDiseaseSuccess, (state, { disease }) =>
    diseasesAdapter.upsertOne(disease, { ...state, loaded: true })
  ),
  on(
    DiseasesActions.updateDiseaseSuccess,
    (state, { disease: { id, ...restDisease } }) =>
      diseasesAdapter.updateOne(
        { id, changes: { ...restDisease } },
        { ...state, loaded: true }
      )
  ),
  on(DiseasesActions.deleteDiseaseSuccess, (state, { id }) =>
    diseasesAdapter.removeOne(id, { ...state, loaded: true })
  )
);

export function diseasesReducer(
  state: DiseasesState | undefined,
  action: Action
) {
  return _diseasesReducer(state, action);
}
