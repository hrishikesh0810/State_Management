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
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getFundData();
    this.fundTransfer = this.formBuilder.group({
      customerName : {},
      fromAccount : {},
      toAccount : {},
      amount : {},
      description: {}
    })
  }

  getFundData(){
    this.httpClient.get('/assets/mydata.json').subscribe((res:any)=>{
      console.log("***100",res);
      this.fundTransferRes = res;
      console.log("***200",this.fundTransferRes.data.FromAccount);
      this.customerNameNew = this.fundTransferRes.data.FromAccount;
      console.log("***201",this.customerNameNew);
      // this.showFundTransferData();
    });
  }

  showFundTransferData(){

    var arrData = this.fundTransferRes.properties;
    for(var i=0; i<arrData.length;i++){
      var arr = this.fundTransferRes.properties[i];
      this.fieldKey = arr.fieldKey;

      if(!arr.isEditable){
        this.fundTransfer.controls[arr.fieldKey].disable();
      }
    }
      this.showData = this.fundTransferRes.data.FromAccount;
  }

  disableData(){
    this.isVisible = true;
  }
  enableData(){
    this.isVisible = false;
  }
}
