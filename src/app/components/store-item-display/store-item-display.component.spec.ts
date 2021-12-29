import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemDisplayComponent } from './store-item-display.component';

describe('StoreItemDisplayComponent', () => {
  let component: StoreItemDisplayComponent;
  let fixture: ComponentFixture<StoreItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreItemDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
