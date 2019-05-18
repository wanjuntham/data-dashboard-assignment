import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartImageComponent } from './pie-chart-image.component';

describe('PieChartImageComponent', () => {
  let component: PieChartImageComponent;
  let fixture: ComponentFixture<PieChartImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
