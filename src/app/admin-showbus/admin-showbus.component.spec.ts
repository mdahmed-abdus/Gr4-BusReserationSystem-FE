import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowbusComponent } from './admin-showbus.component';

describe('AdminShowbusComponent', () => {
  let component: AdminShowbusComponent;
  let fixture: ComponentFixture<AdminShowbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShowbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
