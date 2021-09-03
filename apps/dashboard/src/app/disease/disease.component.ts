import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseasesFacade } from '@patho/core-state';

@Component({
  selector: 'patho-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent implements OnInit {
  currentDisease$ = this.diseasesFacade.selectedDiseases$;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private diseasesFacade: DiseasesFacade
  ) {}

  ngOnInit() {
    const diseaseId = this.route.snapshot.params.id;
    this.loadDisease(diseaseId);
  }

  loadDisease(diseaseId: string) {
    this.diseasesFacade.selectDisease(diseaseId);
    this.diseasesFacade.loadDisease(diseaseId);
  }

  goBack() {
    this.router.navigate(['/diseases']);
  }
}
