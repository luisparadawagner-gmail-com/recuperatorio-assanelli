import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaViajeComponent } from './tabla-viaje.component';

describe('TablaViajeComponent', () => {
  let component: TablaViajeComponent;
  let fixture: ComponentFixture<TablaViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
