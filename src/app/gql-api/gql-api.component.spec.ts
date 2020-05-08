import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GqlApiComponent } from './gql-api.component';

describe('GqlApiComponent', () => {
  let component: GqlApiComponent;
  let fixture: ComponentFixture<GqlApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GqlApiComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GqlApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
