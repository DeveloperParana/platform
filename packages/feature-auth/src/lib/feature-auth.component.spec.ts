import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAuthComponent } from './feature-auth.component';

describe('FeatureAuthComponent', () => {
  let component: FeatureAuthComponent;
  let fixture: ComponentFixture<FeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
