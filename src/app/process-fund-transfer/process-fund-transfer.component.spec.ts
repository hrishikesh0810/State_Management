import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFundTransferComponent } from './process-fund-transfer.component';

describe('ProcessFundTransferComponent', () => {
  let component: ProcessFundTransferComponent;
  let fixture: ComponentFixture<ProcessFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
