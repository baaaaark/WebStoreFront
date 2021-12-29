import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemDisplayComponent } from './single-item-display.component';

describe('SingleItemDisplayComponent', () => {
  let component: SingleItemDisplayComponent;
  let fixture: ComponentFixture<SingleItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
