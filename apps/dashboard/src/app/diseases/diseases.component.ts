import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Disease, emptyDisease } from '@patho/api-interfaces';
import { DiseasesFacade } from '@patho/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'patho-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss'],
})
export class DiseasesComponent implements OnInit {
  form: FormGroup;
  diseases$: Observable<Disease[]> = this.diseasesFacade.allDiseases$;
  selectedDisease$: Observable<Disease> = this.diseasesFacade.selectedDiseases$;

  constructor(
    private diseasesFacade: DiseasesFacade,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    this.diseasesFacade.loadDiseases();
    this.reset();
    const diseaseRouteId = this.route.snapshot.params['id'];
    if (diseaseRouteId) {
      this.loadDisease(diseaseRouteId);
    }
  }

  reset() {
    this.selectDisease(emptyDisease);
    this.form.reset();
  }

  selectDisease(disease: Disease) {
    this.diseasesFacade.selectDisease(disease.id);
    this.form.patchValue(disease);
  }

  loadDisease(diseaseId: string) {
    this.diseasesFacade.selectDisease(diseaseId);
    this.diseasesFacade.loadDisease(diseaseId);
  }

  viewDisease(diseaseId: string) {
    this.router.navigate(['/disease', diseaseId]);
  }

  createDisease(disease: Disease) {
    this.diseasesFacade.createDisease(disease);
    this.reset();
  }

  saveDisease(disease: Disease) {
    disease.id
      ? this.diseasesFacade.updateDisease(disease)
      : this.diseasesFacade.createDisease(disease);
    this.reset();
  }

  updateDisease(disease: Disease) {
    this.diseasesFacade.createDisease(disease);
    this.reset();
  }

  deleteDisease(disease: Disease) {
    this.diseasesFacade.deleteDisease(disease);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      cause: ['', Validators.required],
      populationEffected: ['', Validators.required],
      treatment: [''],
    });
  }
}
