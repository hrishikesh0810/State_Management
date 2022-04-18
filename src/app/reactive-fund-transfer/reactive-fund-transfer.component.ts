import { FundTransfer } from './../modal/FundTransfer.modal';
import { Observable, Subscription } from 'rxjs';
import { FundTransferState } from './../store/state/fundTransfer.state';
import { GetFundTransfer } from './../store/actions/fundTransfer.action';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { FundTransferServiceService } from 'src/fund-transfer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-fund-transfer',
  templateUrl: './reactive-fund-transfer.component.html',
  styleUrls: ['./reactive-fund-transfer.component.css']
})
export class ReactiveFundTransferComponent implements OnInit,OnDestroy {
  fundTransfer!: FormGroup;

  constructor(private fundService: FundTransferServiceService,
    private formBuilder:FormBuilder,private store:Store,private router:Router) { }

  @Select(FundTransferState.getFundTransfer) getFundData$!: Observable<FundTransfer[]>;

  @Select(FundTransferState.fundTransferLoaded) fundTransferLoaded$! : Observable<boolean>;

  fundTransferSub!: Subscription;
  fundTransferRes : any;
  isDisabledFromAccount!: boolean;
  isDisabledToAccount!: boolean;
  isDisabledAmount!: boolean;
  isDisabledDescription!: boolean;
  ngOnInit(): void {
    this.getFundData();
    // this.setData();

    this.fundTransfer = this.formBuilder.group({
      fromAccount : new FormControl(),
      toAccount : new FormControl(),
      amount : new FormControl(),
      description: new FormControl()
    })
  }

  getFundData(){

    this.fundTransferSub = this.fundTransferLoaded$.subscribe(res =>{
      if(!res){
        this.store.dispatch(new GetFundTransfer());
      }
    })

    this.getFundData$.subscribe(res =>{
      console.log("***333",res);
      this.fundTransferRes = res;
      console.log("***334",this.fundTransferRes);
    });

   }

   SendData(pageName: string):void{
      this.router.navigate([`${pageName}`]);
  }

   ngOnDestroy(){
    this.fundTransferSub.unsubscribe();
  }

}
