import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesAsignaturaComponent } from './estudiantes-asignatura.component';

describe('EstudiantesAsignaturaComponent', () => {
  let component: EstudiantesAsignaturaComponent;
  let fixture: ComponentFixture<EstudiantesAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
