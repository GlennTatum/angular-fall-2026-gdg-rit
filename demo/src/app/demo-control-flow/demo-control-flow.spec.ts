import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoControlFlow } from './demo-control-flow';

describe('DemoControlFlow', () => {
  let component: DemoControlFlow;
  let fixture: ComponentFixture<DemoControlFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoControlFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoControlFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
