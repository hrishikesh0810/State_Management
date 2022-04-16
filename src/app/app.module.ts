import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FundTransferServiceService } from 'src/fund-transfer-service.service';
import { FundTransfer2Component } from './fund-transfer2/fund-transfer2.component';
import { ReactiveFundTransferComponent } from './reactive-fund-transfer/reactive-fund-transfer.component';
//Ngxs
import { NgxsModule } from '@ngxs/store';
//logger
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
//DevTools
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FundTransferState } from './store/state/fundTransfer.state';
import { ProcessFundTransferComponent } from './process-fund-transfer/process-fund-transfer.component';
@NgModule({
  declarations: [
    AppComponent,
    FundTransferComponent,
    FundTransfer2Component,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([FundTransferState]),
    NgxsLoggerPluginModule.forRoot(),

    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [FundTransferServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
