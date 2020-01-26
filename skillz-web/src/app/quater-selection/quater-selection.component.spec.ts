import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaterSelectionComponent } from './quater-selection.component';

describe('QuaterSelectionComponent', () => {
  let component: QuaterSelectionComponent;
  let fixture: ComponentFixture<QuaterSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaterSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
