import { ComponentFixture, TestBed } from '@angular/core/testing';

import { especialidadesComponent } from './especialidades.component';

describe('EspecialidadesComponent', () => {
  let component: especialidadesComponent;
  let fixture: ComponentFixture<especialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ especialidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(especialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
