import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Disease } from '@patho/api-interfaces';

@Component({
  selector: 'patho-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrls: ['./diseases-list.component.scss'],
})
export class DiseasesListComponent {
  @Input() diseases: Disease[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() diseaseViewed = new EventEmitter();
}
