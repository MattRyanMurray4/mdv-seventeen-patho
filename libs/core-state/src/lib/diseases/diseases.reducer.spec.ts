import { Action } from '@ngrx/store';

import * as DiseasesActions from './diseases.actions';
import { DiseasesEntity } from './diseases.models';
import { State, initialState, reducer } from './diseases.reducer';

describe('Diseases Reducer', () => {
  const createDiseasesEntity = (id: string, name = ''): DiseasesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Diseases actions', () => {
    it('loadDiseasesSuccess should return the list of known Diseases', () => {
      const diseases = [
        createDiseasesEntity('PRODUCT-AAA'),
        createDiseasesEntity('PRODUCT-zzz'),
      ];
      const action = DiseasesActions.loadDiseasesSuccess({ diseases });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
