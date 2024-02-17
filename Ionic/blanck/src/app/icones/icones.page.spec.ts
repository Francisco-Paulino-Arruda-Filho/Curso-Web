import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconesPage } from './icones.page';

describe('IconesPage', () => {
  let component: IconesPage;
  let fixture: ComponentFixture<IconesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IconesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
