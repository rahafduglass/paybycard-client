import { CardDetails } from './card-details';

export class CompletePaymentRequest {
  verifyCard!: CardDetails;
  paymentReference!: string;
  otp!:string;
}
