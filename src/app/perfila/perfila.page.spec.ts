import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilaPage } from './perfila.page';

describe('PerfilaPage', () => {
  let component: PerfilaPage;
  let fixture: ComponentFixture<PerfilaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
