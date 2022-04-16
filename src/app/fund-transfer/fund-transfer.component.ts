import { FundTransferServiceService } from './../../fund-transfer-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  fundTransfer!: FormGroup;
  isVisible = false;
  isDisabled: boolean =false;
  customerNameNew: any;
  fundTransferRes : any;
  fieldKey : string = '';
  public dynamicArray = {
    customerName : '',
    fromAccount : '',
    toAccount : '',
    amount : '',
    description:'',
    prop_FromAccount:{
      isEditable : false,
      isVisiable : false,
      labelName : '',
      isMandatory : false
    },
    // prop_ToAccount:{
    //   isEditable : false,
    //   isVisiable : false,
    //   labelName : '',
    //   isMandatory : false
    // },
    // prop_Amount:{},
    // prop_Description:{}
  };
  showData: any;
  fromAccount: any;
  body:any={
    "FormId" : 1,
    "RoleId" : 1,
    "StatusID" : 1,
    "TransactionId" : 14
}
  constructor(
    private fundService : FundTransferServiceService,
    private httpClient: HttpClient,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getFundData();
    // this.fundTransfer = this.formBuilder.group({
    //   fromAccount : {},
    //   toAccount : {},
    //   amount : {},
    //   description: {}
    // })
  }

  getFundData(){
   this.fundService.getFundTransferData().subscribe(res=>{
      console.log("***100",res);
      this.fundTransferRes = res;
      if(this.fundTransferRes === undefined){
        return;
      }
      // console.log("***100",this.fundTransferRes.data.data);
      // this.customerNameNew = 'hhhh';
      // console.log("***200FA",this.customerNameNew);
      // console.log("***200TA",this.fundTransferRes.data.data.ToAccount);
      // console.log("***200A",this.fundTransferRes.data.data.Amount);
      // console.log("***200D",this.fundTransferRes.data.data.Description);

    });
  }

  showFundTransferData(){

    // var arrData = this.fundTransferRes.properties;
    // for(var i=0; i<arrData.length;i++){
    //   var arr = this.fundTransferRes.properties[i];
    //   this.fieldKey = arr.fieldKey;

    //   if(!arr.isEditable){
    //     this.fundTransfer.controls[arr.fieldKey].disable();
    //   }
    // }
      this.showData = this.fundTransferRes.data.data.FromAccount;
  }

  onSubmit(value:any){

    console.log("***300",value.fromAccount.value);
  }
  // disableData(){
  //   this.isVisible = true;
  // }
  // enableData(){
  //   this.isVisible = false;
  // }
}
