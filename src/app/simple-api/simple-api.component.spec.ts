import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleApiComponent } from './simple-api.component';

describe('SimpleApiComponent', () => {
  let component: SimpleApiComponent;
  let fixture: ComponentFixture<SimpleApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
