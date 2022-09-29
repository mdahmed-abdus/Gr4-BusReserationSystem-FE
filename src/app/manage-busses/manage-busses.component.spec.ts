import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBussesComponent } from './manage-busses.component';

describe('ManageBussesComponent', () => {
  let component: ManageBussesComponent;
  let fixture: ComponentFixture<ManageBussesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBussesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
