import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipesComponent } from './impure-pipes.component';

describe('ImpurePipesComponent', () => {
  let component: ImpurePipesComponent;
  let fixture: ComponentFixture<ImpurePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpurePipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpurePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
