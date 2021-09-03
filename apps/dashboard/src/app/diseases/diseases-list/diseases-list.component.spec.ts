import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesListComponent } from './diseases-list.component';

describe('DiseasesListComponent', () => {
  let component: DiseasesListComponent;
  let fixture: ComponentFixture<DiseasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
