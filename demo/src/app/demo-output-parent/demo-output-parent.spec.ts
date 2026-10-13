import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoOutputParent } from './demo-output-parent';

describe('DemoOutputParent', () => {
  let component: DemoOutputParent;
  let fixture: ComponentFixture<DemoOutputParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoOutputParent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoOutputParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
