import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Disease } from '@patho/api-interfaces';
import * as DiseasesActions from './diseases.actions';
import * as DiseasesSelectors from './diseases.selectors';

@Injectable()
export class DiseasesFacade {
  loaded$ = this.store.pipe(select(DiseasesSelectors.getDiseasesLoaded));
  allDiseases$ = this.store.pipe(select(DiseasesSelectors.getAllDiseases));
  selectedDiseases$ = this.store.pipe(select(DiseasesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(DiseasesActions.init());
  }

  loadDisease(diseaseId: string) {
    return this.store.dispatch(DiseasesActions.loadDisease({ diseaseId }));
  }

  loadDiseases() {
    return this.store.dispatch(DiseasesActions.loadDiseases());
  }

  selectDisease(diseaseId: string) {
    return this.store.dispatch(DiseasesActions.selectDisease({ diseaseId }));
  }

  createDisease(disease: Disease) {
    return this.store.dispatch(DiseasesActions.createDisease({ disease }));
  }

  updateDisease(disease: Disease) {
    return this.store.dispatch(DiseasesActions.updateDisease({ disease }));
  }

  deleteDisease(disease: Disease) {
    return this.store.dispatch(DiseasesActions.deleteDisease({ disease }));
  }

  private dispatch(action: Action) {
    return this.store.dispatch(action);
  }
}
