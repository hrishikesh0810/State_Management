import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFundTransferComponent } from './reactive-fund-transfer.component';

describe('ReactiveFundTransferComponent', () => {
  let component: ReactiveFundTransferComponent;
  let fixture: ComponentFixture<ReactiveFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFundTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
