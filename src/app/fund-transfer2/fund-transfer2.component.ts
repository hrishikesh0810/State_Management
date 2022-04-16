import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FundTransferServiceService } from 'src/fund-transfer-service.service';

@Component({
  selector: 'app-fund-transfer2',
  templateUrl: './fund-transfer2.component.html',
  styleUrls: ['./fund-transfer2.component.css']
})
export class FundTransfer2Component implements OnInit {

  fundTransferRes : any;
  customerNameNew: any;
  constructor(private fundService : FundTransferServiceService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getFundData();
  }

  getFundData(){
    this.httpClient.get('/assets/mydata.json').subscribe((res:any)=>{
      console.log("***100",res);
      this.fundTransferRes = res;
      console.log("***200",this.fundTransferRes.data.FromAccount);
      this.customerNameNew = this.fundTransferRes.data.FromAccount;
      console.log("***201",this.customerNameNew);
    });

    // this.fundService.getFundTransferData().subscribe(res=>{
    //   console.log("***100",res);
    //   this.fundTransferRes = res;
    //   if(this.fundTransferRes === undefined){
    //     return;
    //   }
    //   console.log("***100",this.fundTransferRes.data.data);
    //   this.customerNameNew = this.fundTransferRes.data.data.FromAccount;
    //   console.log("***200FA",this.customerNameNew);
    //   console.log("***200TA",this.fundTransferRes.data.data.ToAccount);
    //   console.log("***200A",this.fundTransferRes.data.data.Amount);
    //   console.log("***200D",this.fundTransferRes.data.data.Description);

    // });
  }

  onSubmit(form: NgForm){
    console.log("***500",form.value);
  }

}
