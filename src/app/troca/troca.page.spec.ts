import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrocaPage } from './troca.page';

describe('TrocaPage', () => {
  let component: TrocaPage;
  let fixture: ComponentFixture<TrocaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
