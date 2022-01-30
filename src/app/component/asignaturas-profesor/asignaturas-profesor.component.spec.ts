import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasProfesorComponent } from './asignaturas-profesor.component';

describe('AsignaturasProfesorComponent', () => {
  let component: AsignaturasProfesorComponent;
  let fixture: ComponentFixture<AsignaturasProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturasProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
