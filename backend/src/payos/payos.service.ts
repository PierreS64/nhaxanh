import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayOS } from '@payos/node'; 

@Injectable()
export class PayosService {
  private payos: PayOS;

  constructor(private configService: ConfigService) {

    this.payos = new PayOS({
      clientId: this.configService.get<string>('PAYOS_CLIENT_ID') || '',
      apiKey: this.configService.get<string>('PAYOS_API_KEY') || '',
      checksumKey: this.configService.get<string>('PAYOS_CHECKSUM_KEY') || '',
    });
  }

  get instance(): PayOS {
    return this.payos;
  }

  async verifyPaymentWebhookData(webhookBody: any) {
    return this.payos.webhooks.verify(webhookBody);
  }

  async createPaymentLink(orderCode: number, amount: number, description: string, returnUrl: string, cancelUrl: string) {
    return this.payos.paymentRequests.create({
      orderCode,
      amount,
      description,
      returnUrl,
      cancelUrl,
    });
  }
}