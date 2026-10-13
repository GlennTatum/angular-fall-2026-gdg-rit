import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoTemplate } from './demo-template';

describe('DemoTemplate', () => {
  let component: DemoTemplate;
  let fixture: ComponentFixture<DemoTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
