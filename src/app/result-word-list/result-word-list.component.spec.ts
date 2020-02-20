import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultWordListComponent } from './result-word-list.component';

describe('ResultWordListComponent', () => {
  let component: ResultWordListComponent;
  let fixture: ComponentFixture<ResultWordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultWordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultWordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
