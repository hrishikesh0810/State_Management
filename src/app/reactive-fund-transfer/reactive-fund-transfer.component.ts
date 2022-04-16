import { FundTransfer } from './../modal/FundTransfer.modal';
import { Observable, Subscription } from 'rxjs';
import { FundTransferState } from './../store/state/fundTransfer.state';
import { GetFundTransfer } from './../store/actions/fundTransfer.action';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { FundTransferServiceService } from 'src/fund-transfer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-fund-transfer',
  templateUrl: './reactive-fund-transfer.component.html',
  styleUrls: ['./reactive-fund-transfer.component.css']
})
export class ReactiveFundTransferComponent implements OnInit,OnDestroy {
  fundTransfer: any;

  constructor(private fundService: FundTransferServiceService,
    private formBuilder:FormBuilder,private store:Store,private router:Router) { }

  @Select(FundTransferState.getFundTransfer) getFundData$!: Observable<FundTransfer[]>;

  @Select(FundTransferState.fundTransferLoaded) fundTransferLoaded$! : Observable<boolean>;

  fundTransferSub!: Subscription;
  fundTransferRes : any;
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
      console.log("***334",this.fundTransferRes.data.data.Amount);
    });
    // this.fundService.getFundTransferData().subscribe(res=>{
    //    console.log("***100",res);
    //    this.fundTransferRes = res;
    //    if(this.fundTransferRes === undefined){
    //      return;
    //    }

    //  });
   }

   SendData(pageName: string):void{

      this.router.navigate([`${pageName}`]);
    //  console.log("***300",fundTransfer.value);
    //  console.log("***301",fundTransfer.value.fromAccount);
    //  this.fundService.createFundTransfer(fundTransfer.value).subscribe(() =>{
    //   this.fundService.alertMessage("Record has been submitted successfully");
    //  });
  }

   ngOnDestroy(){
    this.fundTransferSub.unsubscribe();
  }

  // disableFields(){
  //   this.
  // }
}
