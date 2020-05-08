import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBoxComponent } from './ip-box.component';

describe('IpBoxComponent', () => {
  let component: IpBoxComponent;
  let fixture: ComponentFixture<IpBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
