import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoInputParent } from './demo-input-parent';

describe('DemoInputParent', () => {
  let component: DemoInputParent;
  let fixture: ComponentFixture<DemoInputParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoInputParent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoInputParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
