import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTaskComponent } from './final-task.component';

describe('FinalTaskComponent', () => {
  let component: FinalTaskComponent;
  let fixture: ComponentFixture<FinalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
