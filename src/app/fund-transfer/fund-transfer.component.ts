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
  isVisible = true;
  isDisabled!: boolean;
  customerNameNew: any;
  public dynamicArray = {
    customerName : '',
    fromAccount : '',
    toAccount : '',
    amount : '',
    description:'',
    prop_FromAccount:{
      isEditable : true,
      isVisiable : false,
      labelName : '',
      isMandatory : false
    }
    // prop_ToAccount:{},
    // prop_Amount:{},
    // prop_Description:{}
  };
  showData: any;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getFundData();
    this.fundTransfer = this.formBuilder.group({
      customerName : {value:'',disabled:this.isDisabled},
      fromAccount : {},
      toAccount : {},
      amount : {},
      description: {}
    })

    console.log("***102",this.isDisabled);
  }

  getFundData(){
    this.httpClient.get('/assets/mydata.json').subscribe((res:any)=>{
      console.log("***100",res.properties.FromAccount);
      this.dynamicArray={
          customerName : res.data.CustomerName,
          fromAccount : res.data.FromAccount,
          toAccount : res.data.ToAccount,
          amount : res.data.Amount,
          description : res.data.Description,
          prop_FromAccount :{
              isEditable : res.properties.FromAccount.isEditable,
              isVisiable : res.properties.FromAccount.isVisiable,
              labelName : res.properties.FromAccount.labelName,
              isMandatory : res.properties.FromAccount.isMandatory
          }
      }
      this.isDisabled = this.dynamicArray.prop_FromAccount.isEditable;

     console.log("***101",this.isDisabled);
    });
  }

  showFundTransferData(){
        this.showData = this.dynamicArray.customerName +' '+ this.dynamicArray.amount;
  }
   // setFundTransferData(){
  //   this.fundTransfer.setValue({
  //     customerName : 'Harry',
  //     fromAccount : '1',
  //     toAccount : '2',
  //     amount : '555'
  //   })
  // }
}
