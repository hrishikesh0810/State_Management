import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransfer2Component } from './fund-transfer2.component';

describe('FundTransfer2Component', () => {
  let component: FundTransfer2Component;
  let fixture: ComponentFixture<FundTransfer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundTransfer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransfer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
