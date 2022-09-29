import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbusesComponent } from './showbuses.component';

describe('ShowbusesComponent', () => {
  let component: ShowbusesComponent;
  let fixture: ComponentFixture<ShowbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
