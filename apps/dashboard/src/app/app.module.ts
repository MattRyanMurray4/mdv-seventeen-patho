import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@patho/material';
import { CoreDataModule } from '@patho/core-data';
import { CoreStateModule } from '@patho/core-state';
import { UiLibraryModule } from '@patho/ui-library';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiseaseComponent } from './disease/disease.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DiseaseDetailsComponent } from './diseases/disease-details/disease-details.component';
import { DiseasesListComponent } from './diseases/diseases-list/diseases-list.component';
import { DiseaseInfoComponent } from './disease/disease-info/disease-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DiseaseComponent,
    DiseasesComponent,
    DiseaseDetailsComponent,
    DiseasesListComponent,
    DiseaseInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibraryModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
