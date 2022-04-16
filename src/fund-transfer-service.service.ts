import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FundTransfer } from './app/modal/FundTransfer.modal';

@Injectable({
  providedIn: 'root'
})
export class FundTransferServiceService {

  readonly errorMapEn = new Map();
  baseURL = "http://localhost:59503/api";
  constructor(private httpCliect:HttpClient ) {}
  payload = {
        "FormId" : 1,
        "RoleId" : 1,
        "StatusID" : 1,
        "TransactionId" : 14
    }
    alertMessage(messageCode: string) {
      let message = this.errorMapEn.get(messageCode);
      if (message) {
        messageCode = message;
      }
    }
  getFundTransferData(): Observable<FundTransfer[]>{
    console.log("***99");
    return this.httpCliect.post<FundTransfer[]>(this.baseURL+"/FundTransfer/GetFundTransfer",this.payload);
  }

  createFundTransfer(data: any){
    console.log("***303",data);
    return data;

  }
}
