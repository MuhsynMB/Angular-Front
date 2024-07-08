import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCaseComponent } from './createnewcase.component';

describe('CreatenewcaseComponent', () => {
  let component: CreateNewCaseComponent;
  let fixture: ComponentFixture<CreateNewCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
