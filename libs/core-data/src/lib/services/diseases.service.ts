import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disease } from '@patho/api-interfaces';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class DiseasesService {
  private model = 'diseases';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Disease[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Disease>(this.getUrlById(id));
  }

  create(disease: Disease) {
    return this.httpClient.post<Disease>(this.getUrl(), disease);
  }

  update(disease: Disease) {
    return this.httpClient.patch<Disease>(this.getUrlById(disease.id), disease);
  }

  delete(diseaseId: string) {
    return this.httpClient
      .delete<string>(this.getUrlById(diseaseId))
      .pipe(mapTo(diseaseId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
