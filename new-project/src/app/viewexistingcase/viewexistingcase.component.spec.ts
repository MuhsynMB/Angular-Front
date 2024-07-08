import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexistingcaseComponent } from './viewexistingcase.component';

describe('ViewexistingcaseComponent', () => {
  let component: ViewexistingcaseComponent;
  let fixture: ComponentFixture<ViewexistingcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewexistingcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewexistingcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
