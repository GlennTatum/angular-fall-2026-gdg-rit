import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoCatComponent } from './demo-cat-component';

describe('DemoCatComponent', () => {
  let component: DemoCatComponent;
  let fixture: ComponentFixture<DemoCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoCatComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
