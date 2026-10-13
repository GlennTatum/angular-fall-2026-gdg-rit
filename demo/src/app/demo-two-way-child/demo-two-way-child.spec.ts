import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTwoWayChild } from './demo-two-way-child';

describe('DemoTwoWayChild', () => {
  let component: DemoTwoWayChild;
  let fixture: ComponentFixture<DemoTwoWayChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTwoWayChild],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoTwoWayChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
