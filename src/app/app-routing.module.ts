import { ReactiveFundTransferComponent } from './reactive-fund-transfer/reactive-fund-transfer.component';
import { ProcessFundTransferComponent } from './process-fund-transfer/process-fund-transfer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'fund' , component: ReactiveFundTransferComponent},
  {path:'process' , component: ProcessFundTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ReactiveFundTransferComponent,ProcessFundTransferComponent];
