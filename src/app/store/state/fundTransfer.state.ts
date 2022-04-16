import { GetFundTransfer } from './../actions/fundTransfer.action';
import { FundTransfer } from './../../modal/FundTransfer.modal';
import { Action, Actions, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from '@angular/core';
import { FundTransferServiceService } from 'src/fund-transfer-service.service';
import { tap } from 'rxjs/operators';

export class FundTransferStateModal{
  fundTransferModal!: FundTransfer[];
  fundTransferLoaded!: boolean;
}

@State<FundTransferStateModal>({
  name:'fundtransfer',
  defaults:{
    fundTransferModal : [],
    fundTransferLoaded: false
  }
})

@Injectable()
export class FundTransferState{

  constructor(private fundService: FundTransferServiceService){}

  @Selector()
  static getFundTransfer(state:FundTransferStateModal){
    return state.fundTransferModal;
  }

  @Selector()
  static fundTransferLoaded(state:FundTransferStateModal){
     return state.fundTransferLoaded;
  }

  @Action(GetFundTransfer)
  getFundTransfer({getState,setState} : StateContext<FundTransferStateModal>){
    console.log("***5 Action State.....")

   return this.fundService.getFundTransferData().pipe(tap(res =>{
    console.log("***6",res);

    const state = getState();
    console.log("***8" ,state);
    setState({
      ...state,
      fundTransferModal : res,
      fundTransferLoaded : true
    })
   }))


    // this.fundService.getFundTransferData().subscribe(res => {
    //   console.log("***6",res);
    // })
  }
}
