import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Disease } from '@patho/api-interfaces';

@Component({
  selector: 'patho-disease-details',
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.scss'],
})
export class DiseaseDetailsComponent {
  currentDisease: Disease;
  originalName: string;

  @Input() set disease(value: Disease | null) {
    if (value) this.originalName = value.name;
    this.currentDisease = Object.assign({}, value);
  }

  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(disease: Disease) {
    this.saved.emit(disease);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
