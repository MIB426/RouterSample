import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxRouteComponent } from './aux-route.component';

describe('AuxRouteComponent', () => {
  let component: AuxRouteComponent;
  let fixture: ComponentFixture<AuxRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
