import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FailurePage } from './failure.page';

describe('FailurePage', () => {
  let component: FailurePage;
  let fixture: ComponentFixture<FailurePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
