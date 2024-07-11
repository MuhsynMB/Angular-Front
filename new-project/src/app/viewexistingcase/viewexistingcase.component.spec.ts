import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExistingCaseComponent } from './viewexistingcase.component';

describe('ViewexistingcaseComponent', () => {
  let component: ViewExistingCaseComponent;
  let fixture: ComponentFixture<ViewExistingCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExistingCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExistingCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
