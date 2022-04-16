import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FundTransfer } from '../modal/FundTransfer.modal';
import { FundTransferState } from '../store/state/fundTransfer.state';

@Component({
  selector: 'app-process-fund-transfer',
  templateUrl: './process-fund-transfer.component.html',
  styleUrls: ['./process-fund-transfer.component.css']
})
export class ProcessFundTransferComponent implements OnInit {
  fundTransferRes: any;

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  processFund: any;

  @Select(FundTransferState.getFundTransfer) getFundData$!: Observable<FundTransfer[]>;

  ngOnInit(): void {
    this.setData();
    this.processFund = this.formBuilder.group({
      fromAccount : new FormControl(),
      toAccount : new FormControl(),
      amount : new FormControl(),
      description: new FormControl(),
      description1: new FormControl(),
      description2: new FormControl(),
      description3: new FormControl()
    })
  }

  setData(){
    this.getFundData$.subscribe(res =>{
      console.log("***333",res);
      this.fundTransferRes = res;
      console.log("***334",this.fundTransferRes.data.data.Amount);
    });
  }
  BackPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
