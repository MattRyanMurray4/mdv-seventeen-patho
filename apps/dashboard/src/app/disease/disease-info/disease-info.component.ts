import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disease } from '@patho/api-interfaces';
import { DiseasesFacade } from '@patho/core-state';

@Component({
  selector: 'patho-disease-info',
  templateUrl: './disease-info.component.html',
  styleUrls: ['./disease-info.component.scss'],
})
export class DiseaseInfoComponent {
  @Input() disease: Disease | null;

  constructor(
    private diseasesFacade: DiseasesFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goBack() {
    this.router.navigate(['/diseases']);
  }
}
