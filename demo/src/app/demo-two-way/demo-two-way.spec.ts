import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTwoWay } from './demo-two-way';

describe('DemoTwoWay', () => {
  let component: DemoTwoWay;
  let fixture: ComponentFixture<DemoTwoWay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTwoWay],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoTwoWay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
