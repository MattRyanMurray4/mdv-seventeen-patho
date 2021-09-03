import {
  actionTypeNamePastTense,
  actionTypeNamePresentTense,
  DiseasesService,
  getActionType,
  NotifyService,
} from '@patho/core-data';

import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {
  loadDisease,
  loadDiseaseFailure,
  loadDiseaseSuccess,
  loadDiseases,
  loadDiseasesFailure,
  loadDiseasesSuccess,
  createDisease,
  createDiseaseFailure,
  createDiseaseSuccess,
  updateDisease,
  updateDiseaseFailure,
  updateDiseaseSuccess,
  deleteDisease,
  deleteDiseaseFailure,
  deleteDiseaseSuccess,
} from './diseases.actions';
import { map, tap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DiseasesEffects {
  loadDisease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDisease),
      switchMap(({ diseaseId }) =>
        this.diseasesService.find(diseaseId).pipe(
          map((disease) => loadDiseaseSuccess({ disease })),
          catchError((error) => of(loadDiseaseFailure({ error })))
        )
      )
    )
  );

  loadDiseases$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDiseases),
      switchMap(() =>
        this.diseasesService.all().pipe(
          map((diseases) => loadDiseasesSuccess({ diseases })),
          catchError((error) => of(loadDiseasesFailure({ error })))
        )
      )
    )
  );

  createDisease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDisease),
      switchMap(({ disease }) =>
        this.diseasesService.create(disease).pipe(
          map((disease) => createDiseaseSuccess({ disease })),
          catchError((error) => of(createDiseaseFailure({ error })))
        )
      )
    )
  );

  updateDisease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDisease),
      switchMap(({ disease }) =>
        this.diseasesService.update(disease).pipe(
          map((disease) => updateDiseaseSuccess({ disease })),
          catchError((error) => of(updateDiseaseFailure({ error })))
        )
      )
    )
  );

  deleteDisease$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDisease),
      switchMap(({ disease }) =>
        this.diseasesService.delete(disease.id).pipe(
          map((id) => deleteDiseaseSuccess({ id })),
          catchError((error) => of(deleteDiseaseFailure({ error })))
        )
      )
    )
  );

  diseaseSuccessNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateDiseaseSuccess,
          createDiseaseSuccess,
          deleteDiseaseSuccess
        ),
        tap((action) => {
          const actionType = getActionType(action.type);
          this.notify.notification(
            `Disease ${actionTypeNamePastTense[actionType]} Successfully!`
          );
        })
      ),
    { dispatch: false }
  );

  diseaseFailureNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          updateDiseaseFailure,
          createDiseaseFailure,
          deleteDiseaseFailure
        ),
        tap((action) => {
          const actionType = getActionType(action.type);
          this.notify.notification(
            `Failed to ${actionTypeNamePresentTense[actionType]} Disease. Please try again.`
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private diseasesService: DiseasesService,
    private notify: NotifyService
  ) {}
}
