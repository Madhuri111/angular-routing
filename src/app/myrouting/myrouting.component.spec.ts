import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyroutingComponent } from './myrouting.component';

describe('MyroutingComponent', () => {
  let component: MyroutingComponent;
  let fixture: ComponentFixture<MyroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
