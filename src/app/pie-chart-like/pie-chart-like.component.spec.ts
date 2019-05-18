import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartLikeComponent } from './pie-chart-like.component';

describe('PieChartLikeComponent', () => {
  let component: PieChartLikeComponent;
  let fixture: ComponentFixture<PieChartLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
