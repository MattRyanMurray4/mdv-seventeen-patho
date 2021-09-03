import { Disease } from '@patho/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Diseases Page] Init');

// all

export const loadDiseases = createAction('[Diseases] Load All Diseases');

export const loadDiseasesSuccess = createAction(
  '[Diseases] Load Diseases Success',
  props<{ diseases: Disease[] }>()
);

export const loadDiseasesFailure = createAction(
  '[Diseases] Load Diseases Failure',
  props<{ error: any }>()
);

// singular

export const loadDisease = createAction(
  '[Disease] Load A Disease',
  props<{ diseaseId: string }>()
);

export const loadDiseaseSuccess = createAction(
  '[Disease] Loaded Disease Success',
  props<{ disease: Disease }>()
);

export const loadDiseaseFailure = createAction(
  '[Disease] Loaded Disease Failure',
  props<{ error: any }>()
);

// select

export const selectDisease = createAction(
  '[Disease] Selected A Disease',
  props<{ diseaseId: string }>()
);

// create

export const createDisease = createAction(
  '[Disease] Create A Disease',
  props<{ disease: Disease }>()
);

export const createDiseaseSuccess = createAction(
  '[Disease] Created Disease Success',
  props<{ disease: Disease }>()
);

export const createDiseaseFailure = createAction(
  '[Disease] Created Disease Failure',
  props<{ error: any }>()
);

// update

export const updateDisease = createAction(
  '[Disease] Update A Disease',
  props<{ disease: Disease }>()
);
export const updateDiseaseSuccess = createAction(
  '[Disease] Update A Disease Successful',
  props<{ disease: Disease }>()
);
export const updateDiseaseFailure = createAction(
  '[Disease] Update A Disease Failure',
  props<{ error: any }>()
);

// delete

export const deleteDisease = createAction(
  '[Disease] Delete A Disease',
  props<{ disease: Disease }>()
);
export const deleteDiseaseSuccess = createAction(
  '[Disease] Deleted Disease Success',
  props<{ id: string }>()
);
export const deleteDiseaseFailure = createAction(
  '[Disease] Deleted Disease Failure',
  props<{ error: any }>()
);
