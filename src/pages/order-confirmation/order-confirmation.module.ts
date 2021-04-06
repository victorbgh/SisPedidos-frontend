import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoService } from '../../app/services/domain/pedido.service';
import { OrderConfirmationPage } from './order-confirmation';

@NgModule({
  declarations: [
    OrderConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirmationPage),
  ],
  providers: [
    PedidoService
  ]
})
export class OrderConfirmationPageModule {}
